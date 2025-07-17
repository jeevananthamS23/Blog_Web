import { Suspense } from 'react';
import Datasee from "@/components/data";

const Data = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Datasee />
      </Suspense>
    </div>
  );
};

export default Data;
