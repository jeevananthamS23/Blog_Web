'use client';
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const Form = dynamic(() => import("@/components/form"), { ssr: false });

const Login = () => {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <Form val={"Admin"} />
    </Suspense>
  );
};

export default Login;
