import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"

const onlyAdmin = ["/admin"]

export default function withAuth(middleware: NextMiddleware, requireAuth: string[] = []){
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathName = req.nextUrl.pathname;

        if(requireAuth.includes(pathName)){
            const token = await getToken({
                req,
                secret: process.env.NEXT_AUTH_SECRET
            })

            if(!token){
                const url = new URL("/auth/login", req.url);


                //callback ke url yg di request ketika sudah berhasil login
                url.searchParams.set("callbackUrl", encodeURI(req.url))
                return NextResponse.redirect(url)
            }

            //middleware untuk prefix admin, jika role tidak sama dengan admin, redirect ke base url
            if(token.role !== 'admin' && onlyAdmin.includes(pathName)){
                return NextResponse.redirect(new URL("/", req.url))
            }
        }
        return middleware(req, next)
    }
}