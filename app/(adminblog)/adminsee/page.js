'use client'; 
export const dynamic = "force-dynamic"; 

import { Suspense } from "react";
import dynamic from "next/dynamic";

const Blogs = dynamic(() => import("@/Blogcomponent/Blogs"), { ssr: false });

export default function AdminSee() {
  return (
    <Suspense fallback={<div>Loading blogs...</div>}>
      <Blogs />
    </Suspense>
  );
}
