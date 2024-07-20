import { clerkMiddleware } from "@clerk/nextjs/server";

const clerkConfig = {
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:'pk_test_cGVyZmVjdC1yYWNlci03MC5jbGVyay5hY2NvdW50cy5kZXYk',
CLERK_SECRET_KEY:'sk_test_ewFSRuSG3iba9ZHtbCtazsDEKAaScLRn4YXwMKqK1T'
};

export default clerkMiddleware(clerkConfig);

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};