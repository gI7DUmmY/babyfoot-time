/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'dcfrapzcynqcwwybaesu.supabase.co',
        port: '',
      },
    ],
  },
}

export default nextConfig
