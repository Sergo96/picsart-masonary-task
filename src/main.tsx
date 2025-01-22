import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Reset, theme } from './theme/globalstyles.ts';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Reset />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
