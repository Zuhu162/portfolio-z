/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/portfolio-z",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
