import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/cookies", destination: "/privacy#cookies", permanent: true }];
  },
};

export default nextConfig;
