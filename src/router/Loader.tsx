import React, { Suspense } from 'react';
import Loading from '@/common/ui/atoms/Loading';
import Layout from '@/common/ui/templates/Layout';

interface IHOC {
  (path: string): React.FC;
}

const modulesMeta: any = import.meta.glob('../pages/*/*');

const modules = Object.keys(modulesMeta).reduce((m: any, p: string) => {
  m[p.replace('/index.tsx', '').replace('.tsx', '')] = modulesMeta[p];
  return m;
}, {});

console.log(modules)

const Loader: IHOC = (path) => {
  console.log()
  const Page = React.lazy(modules[`../pages/${path}`]);
  return () => (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </Layout>
  );
};

export default Loader;
