// // middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   //   return NextResponse.redirect(new URL("/about-2", request.url));

// //   if (request.nextUrl.pathname.startsWith("/about")) {
// //     // This logic is only applied to /about
// //   }

//   return new NextResponse("Hello world");
// }

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };

// import React from "react";

// export function middleware(req, ev) {
//   console.log({ req });
//   return new Response("Hello World");
// }

import { NextResponse } from "next/server";
// import { verifyToken } from "./lib/utils";

export async function middleware(request, ev) {
  // console.log(request);

  if (request.nextUrl.pathname.startsWith("/about")) {
    // This logic is only applied to /about
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // This logic is only applied to /dashboard
  }

  if (request.nextUrl.pathname.startsWith("/")) {
    // This logic is only applied to /
    // return new Response("Hello world");
  }
//------------
  // check the token
  // if the token is valid or page is login
  // pass
  // const token = request ? request.cookies.token : null;
  // const userId = await verifyToken(token);
  // const { pathname } = request.nextUrl;

  // if ((token && userId) || pathname.includes("/api/login")) {
  //   return NextResponse.next();
  // }

  // if (!token && pathname !== "/login") {
  //   return NextResponse.redirect("/login");
  // }
  return NextResponse.next();

  // else  if no token
  // redirect
}
