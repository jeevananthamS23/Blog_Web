'use client';
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import loadDynamic from "next/dynamic";

const Form = loadDynamic(() => import("@/components/form"), { ssr: false });

const Userlogin = () => {
  return (
    <Suspense fallback={<div>Loading user login...</div>}>
      <Form val={"User"} />
    </Suspense>
  );
};

export default Userlogin;
