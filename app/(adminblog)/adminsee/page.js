'use client';

import Blogs from "@/Blogcomponent/Blogs";
import { Suspense } from "react";

const AdminSee = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Blogs />
      </Suspense>
    </div>
  );
};

export default AdminSee;
