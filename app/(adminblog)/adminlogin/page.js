'use client';
export const dynamic = "force-dynamic";

import { Suspense } from "react";
//import loadDynamic from "next/dynamic";
import Form from "@/components/form";
//const Form = loadDynamic(() => import("@/components/form"), { ssr: false });

const Login = () => {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <Form val={"Admin"} />
    </Suspense>
  );
};

export default Login;
