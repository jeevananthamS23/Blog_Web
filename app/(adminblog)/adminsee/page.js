'use client';
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const BlogsComponent = dynamic(() => import("@/Blogcomponent/Blogs"), {
  ssr: false,
  loading: () => <div>Loading blogs...</div>,
});

const AdminSee = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogsComponent />
    </Suspense>
  );
};

export default AdminSee;
