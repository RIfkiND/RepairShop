// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '../auth/auth';  

const protectedRoutes = ['/admin/dashboard'];

export default async function middleware(request: NextRequest) {

  const session = await auth(); 

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (!session && isProtected) {
    const absoluteURL = new URL('/admin/signin', request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL);
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/admin/dashboard/:path*'], 
};
