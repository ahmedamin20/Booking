import { NextRequest, NextResponse } from "next/server";
import { ACCESS_TOKEN } from "./constants/Constants";

export default async function middleware(request: NextRequest) {
  const isOrderCreation = request.nextUrl.pathname === "/create-order";
  const isAuthenticated = Boolean(request.cookies.get(ACCESS_TOKEN));

  if (isOrderCreation && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
}
