import { Suspense } from "react";
import Discomp from "@/Blogcomponent/Disci";

export default function DesPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading description...</div>}>
        <Discomp />
      </Suspense>
    </div>
  );
}
