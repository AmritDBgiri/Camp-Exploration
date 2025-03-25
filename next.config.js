/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export'
}

module.exports = {
  images: {
    unoptimized: true, // Disables Next.js image optimization for static export
  },
  output: "export", // Keeps static site generation
};

