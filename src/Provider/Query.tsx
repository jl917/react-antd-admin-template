import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const isLocal = window.IS_LOCAL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // default 0
      cacheTime: 1000 * 60 * 600, // default 5 minitue 1000 * 60 * 5
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
