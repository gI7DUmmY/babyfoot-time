/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dcfrapzcynqcwwybaesu.supabase.co',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'www.babyfoot-time.fr',
        port: ''
      }
    ]
  }
}

export default nextConfig
