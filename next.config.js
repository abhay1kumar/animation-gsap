/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["gsap"] = "gsap/dist/gsap";
    return config;
  },
};

module.exports = nextConfig;
