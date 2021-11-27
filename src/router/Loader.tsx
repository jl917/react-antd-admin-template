import React, { Suspense } from 'react';
import Loading from '../common/atoms/Loading';
import Layout from '@/layout';

interface IWC {
  (path: string): React.FC;
}

const modules: any = import.meta.glob('../pages/*/*.tsx');

const Loader: IWC = (path) => {
  const Page = React.lazy(modules[`../pages${path}/index.tsx`]);
  return () => (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </Layout>
  );
};

export default Loader;
