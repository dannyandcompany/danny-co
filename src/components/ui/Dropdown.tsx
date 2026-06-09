'use client';

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { cn } from '@/lib/utils';

type AutoFocus = 'first' | 'last' | null;

interface DropdownContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  autoFocusRef: React.RefObject<AutoFocus>;
  menuId: string;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

function useDropdownContext(): DropdownContextValue {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error('Dropdown.* must be used within <Dropdown>.');
  return ctx;
}

const MENU_ITEM = '[role="menuitem"]:not([aria-disabled="true"])';

/** Accessible menu: full keyboard nav, roving focus, click-outside + Esc. */
export function Dropdown({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const autoFocusRef = useRef<AutoFocus>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !contentRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  return (
    <DropdownContext.Provider
      value={{ open, setOpen, triggerRef, contentRef, autoFocusRef, menuId }}
    >
      <div className={cn('relative inline-block text-left', className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open, setOpen, triggerRef, autoFocusRef, menuId } =
    useDropdownContext();

  return (
    <button
      ref={triggerRef}
      type="button"
      aria-haspopup="menu"
      aria-expanded={open}
      aria-controls={menuId}
      onClick={() => {
        const next = !open;
        if (next) autoFocusRef.current = 'first';
        setOpen(next);
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          autoFocusRef.current = 'first';
          setOpen(true);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          autoFocusRef.current = 'last';
          setOpen(true);
        }
      }}
      className={className}
    >
      {children}
    </button>
  );
}

export function DropdownContent({
  children,
  align = 'start',
  className,
}: {
  children: React.ReactNode;
  align?: 'start' | 'end';
  className?: string;
}) {
  const { open, setOpen, triggerRef, contentRef, autoFocusRef, menuId } =
    useDropdownContext();

  // Move focus into the menu once it commits to the DOM (reliable, unlike rAF).
  useEffect(() => {
    if (!open) return;
    const items = contentRef.current?.querySelectorAll<HTMLElement>(MENU_ITEM);
    if (!items?.length) return;
    (autoFocusRef.current === 'last' ? items[items.length - 1] : items[0]).focus();
    autoFocusRef.current = null;
  }, [open, contentRef, autoFocusRef]);

  if (!open) return null;

  const onKeyDown = (e: React.KeyboardEvent) => {
    const items = Array.from(
      contentRef.current?.querySelectorAll<HTMLElement>(MENU_ITEM) ?? []
    );
    if (!items.length) return;
    const current = items.indexOf(document.activeElement as HTMLElement);

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        items[(current + 1) % items.length].focus();
        break;
      case 'ArrowUp':
        e.preventDefault();
        items[(current - 1 + items.length) % items.length].focus();
        break;
      case 'Home':
        e.preventDefault();
        items[0].focus();
        break;
      case 'End':
        e.preventDefault();
        items[items.length - 1].focus();
        break;
      case 'Escape':
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        break;
      case 'Tab':
        setOpen(false);
        break;
    }
  };

  return (
    <div
      ref={contentRef}
      id={menuId}
      role="menu"
      aria-orientation="vertical"
      onKeyDown={onKeyDown}
      className={cn(
        'absolute z-dropdown mt-2 min-w-[12rem] animate-scale-in rounded-xl border border-border bg-elevated p-1 shadow-card',
        align === 'end' ? 'right-0' : 'left-0',
        className
      )}
    >
      {children}
    </div>
  );
}

interface DropdownItemProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onSelect'> {
  onSelect?: () => void;
}

export function DropdownItem({
  children,
  onSelect,
  disabled,
  className,
  ...props
}: DropdownItemProps) {
  const { setOpen, triggerRef } = useDropdownContext();

  return (
    <button
      type="button"
      role="menuitem"
      tabIndex={-1}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      onClick={() => {
        if (disabled) return;
        onSelect?.();
        setOpen(false);
        triggerRef.current?.focus();
      }}
      className={cn(
        'flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-muted',
        'focus:bg-surface focus:text-foreground focus:outline-none',
        'disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
