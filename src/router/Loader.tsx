import React, { Suspense } from 'react';
import Loading from '@/common/ui/atoms/Loading';
import Layout from '@/common/ui/templates/Layout';

interface IHOC {
  (path: string): any;
}

const modulesMeta: any = import.meta.glob('../pages/*/*');

const modules = Object.keys(modulesMeta).reduce((m: any, p: string) => {
  m[p.replace('/index.tsx', '').replace('.tsx', '')] = modulesMeta[p];
  return m;
}, {});

const Loader: IHOC = (path) => {
  const Page = React.lazy(modules[`../pages/${path}`]);
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </Layout>
  );
};

export default Loader;
