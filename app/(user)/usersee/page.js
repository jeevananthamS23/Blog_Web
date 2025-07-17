'use client';
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import loadDynamic from "next/dynamic";

const Blogs = loadDynamic(() => import("@/Blogcomponent/Blogs"), { ssr: false });

const BlogU = () => {
  return (
    <Suspense fallback={<div>Loading user blogs...</div>}>
      <Blogs />
    </Suspense>
  );
};

export default BlogU;
