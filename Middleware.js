// To start working here rename it as middleware.js  (replace M with m)

// import { NextResponse } from "next/server";
// import { verifyToken } from "./lib/utils";

// export async function middleware(req, ev) {
//     const token = req ? req.cookies.get("token") : null;
//   const userId = await verifyToken(token);
//   const { pathname } = req.nextUrl;

//   if (
//     pathname.includes("/api/login") ||
//     userId ||
//     pathname.includes("/static")
//   ) {
//     return NextResponse.next();
//   }

//   if ((!token || !userId) && pathname !== "/login") {
//     const url = req.nextUrl.clone();
//     url.pathname = "/login";
//     return NextResponse.rewrite(url);
//   }
// }
