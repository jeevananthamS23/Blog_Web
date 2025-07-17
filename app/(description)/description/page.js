import Discomp from "@/Blogcomponent/Disci";
import { Suspense } from "react";
const Des=()=>{
    return(
        <div>
          <Suspense fallback={<div>Loading...</div>}>
        <Discomp />
      </Suspense>
        </div>
    )
}
export default Des;