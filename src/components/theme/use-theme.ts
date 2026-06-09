'use client';

import { createContext, useContext } from 'react';

/** Concrete, applied themes. Add a new one here + a `.theme-*` block in CSS. */
export type Theme = 'light' | 'dark' | 'brand';
/** What the user can choose — `system` follows the OS. */
export type ThemePreference = Theme | 'system';

export const THEMES: Theme[] = ['light', 'dark', 'brand'];

/** Maps a theme to the class set on <html>. `light` is the default (no class). */
export const THEME_CLASS: Record<Theme, string> = {
  light: '',
  dark: 'dark',
  brand: 'theme-brand',
};

export interface ThemeContextValue {
  /** Stored user preference. */
  theme: ThemePreference;
  /** The theme actually applied right now. */
  resolvedTheme: Theme;
  setTheme: (theme: ThemePreference) => void;
  /** Flips between light and dark based on what's currently shown. */
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a <ThemeProvider>.');
  }
  return ctx;
}

/** Key shared between the provider and the inline no-flicker script. */
export const THEME_STORAGE_KEY = 'theme';
