export const dynamic = "force-dynamic";

import { Suspense } from "react";
import Blogs from "@/Blogcomponent/Blogs";

const BlogU=()=>{
    return(
        <div>
             <Suspense fallback={<div>Loading...</div>}>
        <Blogs />
      </Suspense>
        </div>
    )
}

export  default BlogU;