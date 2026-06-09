'use client';

import { useState } from 'react';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  Input,
  Label,
  Modal,
} from '@/components/ui';
import { THEMES, useTheme, type Theme } from '@/components/theme';

const THEME_LABEL: Record<Theme, string> = {
  light: 'Light',
  dark: 'Dark',
  brand: 'Brand',
};

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium uppercase tracking-wider text-subtle">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ComponentsPage() {
  const { resolvedTheme, setTheme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container className="space-y-14 py-16">
      <header className="space-y-3">
        <Badge variant="accent">Design System</Badge>
        <h1 className="text-4xl font-semibold">UI Components</h1>
        <p className="max-w-prose text-muted">
          Token-driven, accessible primitives. Switch themes below — every
          component re-skins from CSS variables, no re-render churn.
        </p>
      </header>

      <Block title="Theme">
        <Dropdown>
          <DropdownTrigger>
            <span className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-secondary px-5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">
              Theme: {THEME_LABEL[resolvedTheme]}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </DropdownTrigger>
          <DropdownContent>
            {THEMES.map((t) => (
              <DropdownItem key={t} onSelect={() => setTheme(t)}>
                {THEME_LABEL[t]}
              </DropdownItem>
            ))}
            <DropdownItem onSelect={() => setTheme('system')}>System</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </Block>

      <Block title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="cta">Call to action</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </Block>

      <Block title="Badges">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Default</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </Block>

      <Block title="Inputs">
        <div className="grid max-w-md gap-4">
          <div>
            <Label htmlFor="email">Work email</Label>
            <Input id="email" type="email" placeholder="you@company.com" />
          </div>
          <div>
            <Label htmlFor="broken">Invalid state</Label>
            <Input id="broken" defaultValue="not-an-email" invalid />
          </div>
          <div>
            <Label htmlFor="off">Disabled</Label>
            <Input id="off" placeholder="Unavailable" disabled />
          </div>
        </div>
      </Block>

      <Block title="Card">
        <Card interactive className="max-w-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Growth plan</CardTitle>
              <Badge variant="success">Active</Badge>
            </div>
            <CardDescription>
              Senior partners, shipped in weeks, built to last.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Composable card sections — header, content and footer — share the
            same token surface and elevation.
          </CardContent>
          <CardFooter>
            <Button size="sm">Upgrade</Button>
            <Button size="sm" variant="ghost">
              Learn more
            </Button>
          </CardFooter>
        </Card>
      </Block>

      <Block title="Overlay">
        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Confirm action"
          description="Focus is trapped here. Press Esc, click the backdrop, or use a button to close — focus returns to the trigger."
        >
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setModalOpen(false)}>
              Delete
            </Button>
          </div>
        </Modal>
      </Block>
    </Container>
  );
}
