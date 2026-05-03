/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",          // allows all host-names
            pathname: "/**",         // allows all path-names
          },
        ],
      },
}

export default nextConfig
