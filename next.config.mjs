/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1'],
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  ...(process.env.STATIC_EXPORT === 'true' && {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};
export default nextConfig;
