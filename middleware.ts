import { clerkMiddleware } from "@clerk/nextjs/server";

// Add your Clerk configuration
const clerkConfig = {
  publishableKey: 'pk_test_cGVyZmVjdC1yYWNlci03MC5jbGVyay5hY2NvdW50cy5kZXYk',
};

// Create a custom middleware function that includes the Clerk configuration
export default clerkMiddleware(clerkConfig);

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
