'use client'; // 👌 This is good

export const dynamic = 'force-dynamic'; // 🔧 CHANGE from 'forceDynamic' to 'dynamic'

import { Suspense } from "react";
import loadDynamic from "next/dynamic";

const Blogs = loadDynamic(() => import("@/Blogcomponent/Blogs"), { ssr: false });

const AdminSee = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blogs />
    </Suspense>
  );
};

export default AdminSee;