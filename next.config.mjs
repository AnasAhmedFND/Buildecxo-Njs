/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
