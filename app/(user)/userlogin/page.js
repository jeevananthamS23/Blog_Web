'use client';
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import dynamicImport from "next/dynamic"; // ✅ changed name to avoid conflict

const Form = dynamicImport(() => import("@/components/form"), {
  ssr: false,
  loading: () => <div>Loading form...</div>,
});

export default function Userlogin() {
  return (
    <Suspense fallback={<div>Loading user login...</div>}>
      <Form val="User" />
    </Suspense>
  );
}
