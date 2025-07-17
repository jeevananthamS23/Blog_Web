'use client'; // 👌 This is good

export const dynamic = 'force-dynamic'; // 🔧 CHANGE from 'forceDynamic' to 'dynamic'
import Blogs from "@/Blogcomponent/Blogs";
import { Suspense } from "react";
i//mport loadDynamic from "next/dynamic";

//const Blogs = loadDynamic(() => import("@/Blogcomponent/Blogs"), { ssr: false });

const AdminSee = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blogs />
    </Suspense>
  );
};

export default AdminSee;