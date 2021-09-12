import React, { Suspense } from 'react';
import Loading from '../common/atoms/Loading';
import Layout from '@/layout';

interface IWC {
  (path: string): React.FC;
}

const Loader: IWC = (path) => {
  const Page = React.lazy(() => import(`@/pages${path}`));
  return () => (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </Layout>
  );
};

export default Loader;
