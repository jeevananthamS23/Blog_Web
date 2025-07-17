export const dynamic = "force-dynamic";

import { Suspense } from "react";
import CreDEL from "@/Blogcomponent/Create_Delete";

const Delete=()=>{
    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
        <CreDEL />
      </Suspense>
        </div>
    )
}
export default Delete;