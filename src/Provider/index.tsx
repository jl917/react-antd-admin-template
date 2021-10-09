import React from 'react';
// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';
import RecoilProvider from './Recoil';

// Sentry.init({
//   dsn: 'dsn',
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.1,
// });

const Provider: React.FC = ({ children }) => <RecoilProvider>{children}</RecoilProvider>;

// const Container = Sentry.withProfiler(Provider);

export default Provider;
