'use client';

export const dynamic = 'force-dynamic';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Blogs = dynamic(() => import('@/Blogcomponent/Blogs'), { ssr: false });

const AdminSee = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blogs />
    </Suspense>
  );
};

export default AdminSee;
