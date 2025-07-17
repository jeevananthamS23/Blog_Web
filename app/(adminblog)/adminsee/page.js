'use client';
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import dynamic from "next/dynamic";  // ✅ Use `dynamic`, not `loadDynamic`

const Blogs = dynamic(() => import("@/Blogcomponent/Blogs"), { ssr: false });

const AdminSee = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blogs />
    </Suspense>
  );
};

export default AdminSee;
