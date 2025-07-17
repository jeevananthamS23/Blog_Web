'use client';
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const CreDEL = dynamic(() => import("@/Blogcomponent/Create_Delete"), { ssr: false });

const Create = () => {
  return (
    <Suspense fallback={<div>Loading create...</div>}>
      <CreDEL />
    </Suspense>
  );
};

export default Create;
