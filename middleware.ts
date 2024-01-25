import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ACCESS_TOKEN } from './app/constants/Constants';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const token = request.cookies.get(ACCESS_TOKEN);

    if (!request.nextUrl.pathname.startsWith('/auth')) {
        if ((!token)) {
            return NextResponse.redirect(new URL('/auth/login',request.url))
        }
    } else if(token){
        return NextResponse.redirect(new URL('/home', request.url))
    }


}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};