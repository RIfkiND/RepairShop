// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '../auth/auth';  // Ensure the path is correct

const protectedRoutes = ['/admin/dashboard'];

export default async function middleware(request: NextRequest) {
  // Check the session or authentication
  const session = await auth(); // Ensure this function works correctly and returns expected results

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (!session && isProtected) {
    const absoluteURL = new URL('/admin/signin', request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL);
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Middleware configuration
export const config = {
  matcher: ['/admin/dashboard:path*'], // Adjust this pattern as needed
};
