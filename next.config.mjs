/** @type {import('next').NextConfig} */
const config = {
  async rewrites() {
    return [
      {
        source: "/:_path*",
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
