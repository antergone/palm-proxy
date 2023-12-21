/** @type {import('next').NextConfig} */
const config = {
  async rewrites() {
    return [
      {
        source: "/:_path*",
        destination: "/api/proxy"
      },
    ];
  },
};

export default config;
