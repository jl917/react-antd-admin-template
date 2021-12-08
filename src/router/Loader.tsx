import React, { Suspense } from 'react';
import Loading from '@/common/ui/atoms/Loading';
import Layout from '@/common/ui/templates/Layout';

interface IHOC {
  (path: string): React.FC;
}

const modules: any = import.meta.glob('../components/*/*.entry.tsx');
console.log(modules);

const Loader: IHOC = (path) => {
  const Page = React.lazy(modules[`../components${path}.entry.tsx`]);
  return () => (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </Layout>
  );
};

export default Loader;
