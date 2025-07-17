export const dynamic = "force-dynamic";

import { Suspense } from "react";
import Form from "@/components/form";

const login=()=>{
    return(
        <div>
  
     <Suspense fallback={<div>Loading...</div>}>
        <Form val={"Admin"} />
      </Suspense>

        </div>
    )
}
export default login;