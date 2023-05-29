/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            }
        ]
    }
}

const { withContentlayer } = require('next-contentlayer');
module.exports = withContentlayer(nextConfig);