import React, { Suspense } from 'react';
import Loading from '@/common/ui/atoms/Loading';
import Layout from '@/common/ui/templates/Layout';

interface ILoader {
  (elementPath: string): any
}

const Loader: ILoader = (elementPath) => {
  // import내 startWith string필수.
  const Page = React.lazy(() => import(`../components/${elementPath}`));
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </Layout>
  );
};

export default Loader;
