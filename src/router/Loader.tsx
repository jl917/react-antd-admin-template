import React, { Suspense } from 'react';
import Loading from '@/common/ui/atoms/Loading';
import Layout from '@/common/ui/templates/Layout';

interface ILoader {
  (elementPath: string): React.ReactElement
}

const Loader: ILoader = (elementPath) => {
  const Page = React.lazy(() => import(elementPath));
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </Layout>
  );
};

export default Loader;
