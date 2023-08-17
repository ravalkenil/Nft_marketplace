/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,  
  images: {
    domains: ["*"],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }

}

module.exports = nextConfig
