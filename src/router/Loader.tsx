import React, { Suspense } from 'react';
import Loading from '@/common/ui/atoms/Loading';
import Layout from '@/common/ui/templates/Layout';

interface ILoader {
  (elementPath: string): any
}

const Loader: ILoader = (elementPath) => {
  console.log(elementPath)
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
