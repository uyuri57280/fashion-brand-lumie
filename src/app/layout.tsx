import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import theme from '@/theme';
import ModeSwitch from '@/components/ModeSwitch';
import MenuAppBar from '@/components/Header';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumie",
  description: "LUMIEは、フェミニン・ストリート・フォーマルをミックスし、日常を少し特別に感じられる服を提案するファッションブランド。普通の日を特別な気分で過ごすためのスタイルを届けます。",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  // const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* <ModeSwitch /> */}
            <MenuAppBar/>
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
