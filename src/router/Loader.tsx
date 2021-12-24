import React, { Suspense } from 'react';
import Loading from '@/common/ui/atoms/Loading';
import Layout from '@/common/ui/templates/Layout';

interface ILoader {
  (page: any): any;
}

const Loader: ILoader = (page) => {
  const Page = React.lazy(page);
  // const Page = React.lazy(() => import('../components/aaa/index.page.tsx'));
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </Layout>
  );
};

export default Loader;
