// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Required for static export (for GitHub Pages)
  // basePath: "/portfolio25", // your repo name
  // assetPrefix: "/portfolio25/", // ensure assets load correctly
  images: {
    unoptimized: true, // GitHub Pages doesn’t support Next.js image optimization
    domains: ["i.postimg.cc"],
  },
};

export default nextConfig;
