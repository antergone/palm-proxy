/** @type {import('next').NextConfig} */
const config = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        "has": [
          {
            "type": "query",
            "key": "key",
          }
        ],
        destination: "/api/proxy"
      },
    ];
  },
};

export default config;
