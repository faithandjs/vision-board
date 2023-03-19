import React from 'react';
import { MantineProvider, Text } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import ToggleProvider from './ToggleCtx';
import { AuthProvider } from './AuthCtx';
import { ThemeProvider, useThemeCtx } from './themeCtx';

export default function ContextManager({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useThemeCtx();
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ colorScheme: theme ?? 'light' }}>
      <Notifications />
      <ThemeProvider>
        <AuthProvider>
          <ToggleProvider>{children}</ToggleProvider>
        </AuthProvider>
      </ThemeProvider>
    </MantineProvider>
  );
}

