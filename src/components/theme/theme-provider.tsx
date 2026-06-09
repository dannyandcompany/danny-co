'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  Theme,
  ThemeContext,
  ThemePreference,
  THEMES,
  THEME_CLASS,
  THEME_STORAGE_KEY,
} from './use-theme';

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function resolve(pref: ThemePreference): Theme {
  return pref === 'system' ? getSystemTheme() : pref;
}

function applyClass(theme: Theme): void {
  const root = document.documentElement;
  root.classList.remove('dark', 'theme-brand');
  const cls = THEME_CLASS[theme];
  if (cls) root.classList.add(cls);
}

function readStored(): ThemePreference {
  const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemePreference | null;
  return stored && (stored === 'system' || THEMES.includes(stored as Theme))
    ? stored
    : 'system';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>('system');
  const [resolvedTheme, setResolvedTheme] = useState<Theme>('dark');

  // Sync React state to the class the inline script already applied pre-paint.
  useEffect(() => {
    const pref = readStored();
    setThemeState(pref);
    setResolvedTheme(resolve(pref));
  }, []);

  // Follow OS changes while in `system` mode.
  useEffect(() => {
    if (theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      const next = mq.matches ? 'dark' : 'light';
      setResolvedTheme(next);
      applyClass(next);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [theme]);

  const setTheme = useCallback((next: ThemePreference) => {
    const resolved = resolve(next);
    setThemeState(next);
    setResolvedTheme(resolved);
    localStorage.setItem(THEME_STORAGE_KEY, next);

    // Enable color transitions only for the switch, never on first paint.
    const root = document.documentElement;
    root.classList.add('theme-transition');
    applyClass(resolved);
    window.setTimeout(() => root.classList.remove('theme-transition'), 300);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{ theme, resolvedTheme, setTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
