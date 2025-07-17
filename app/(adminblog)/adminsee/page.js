'use client';
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import dynamicImport from "next/dynamic";


const Blogs = dynamicImport(() => import("@/Blogcomponent/Blogs"), {
  ssr: false,
});

const AdminSee = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blogs />
    </Suspense>
  );
};

export default AdminSee;
