import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const isLocal = window.IS_LOCAL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // default 0
      cacheTime: 0, // default 5 minitue 1000 * 60 * 5
      retry: 1, // default 6
      retryDelay: 1000, // default 1000
    },
  },
});

const Query: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={isLocal} />
  </QueryClientProvider>
);

export default Query;
