// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "../auth/auth";

const protectedRoutes = ["/admin/dashboard"];

//  berapa limit request
const RATE_LIMIT = 10000;
//waktu  batas waktu dari setiaprequest
const WINDOW_MS = 15 * 60 * 1000;

const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();

export default async function middleware(request: NextRequest) {
  //auth
  const session = await auth();

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );
  //bila tidak ada session login dan rute nya di proteksi maka akan kembali ke admin signin
  //sebener nya bisa di hapus yang isProcted karena sudah menggunakan matcher di function config
  if (!session && isProtected) {
    const absoluteURL = new URL("/admin/signin", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL);
  }

  //gak tau kemungkinan untuk ngambil date dan request ip mungkin
  const ip = request.headers.get("x-forwarded-for") || request.ip || "unknown";
  const now = Date.now();
  const ratelimiter = rateLimitMap.get(ip);
  //logika rate limiter
  if (ratelimiter) {
    const { count, firstRequest } = ratelimiter;
    // logika ketika requst pertama dan waktu nya
    if (now - firstRequest > WINDOW_MS) {
      rateLimitMap.set(ip, { count: 1, firstRequest: now });
    } //menghitung  bila lebih tinggi dari batas limit request maka
    // akan mengeluarkan status terlalu banyak request
    else if (count >= RATE_LIMIT) {
      return NextResponse.json(
        { error: "Rate limit exceeded" },
        { status: 429 },
      );
    } else {
      //bila tidak lanjutkan
      rateLimitMap.set(ip, { count: count + 1, firstRequest });
    }
  } else {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
  }

  return NextResponse.next();
}

//matcher pertama:
//1. /admin = untuk middleware hanya yang sudah login bisa masuk ke dashboard
//2. /api = untuk me limit semua requst menggunakan rate limiter
export const config = {
  matcher: ["/admin/dashboard/:path*", "/api/:function*"],
};
