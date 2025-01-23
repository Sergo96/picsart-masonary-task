import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Reset, theme } from './common/theme/globalstyles';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary, FallbackUI } from './common/components';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<FallbackUI />}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Reset />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
);
