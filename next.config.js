/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export static HTML with `next build` when using the app router
  output: 'export',
  // optional: set trailingSlash if your Pages expects directories
  trailingSlash: true,
};

export default nextConfig;
