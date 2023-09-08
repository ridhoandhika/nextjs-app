import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware( req: NextRequest) 
{
    const res = NextResponse.next()
    return res
}

// url yang di exclude dari middleware
const includeRoute = ['/product','/profile', '/admin']

export default withAuth(mainMiddleware, includeRoute)
//config untuk route yang di authentikasi
// export const config = {
//     matcher: ['/product']
// }