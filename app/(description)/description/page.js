"use client";

export const dynamicOption = "force-dynamic";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const Discomp = dynamic(() => import("@/Blogcomponent/Disci"), {
  ssr: false,
});

export default function DesPage() {
  return (
    <Suspense fallback={<div>Loading description...</div>}>
      <Discomp />
    </Suspense>
  );
}
