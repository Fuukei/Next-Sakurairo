/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            }
        ]
    },
    output: 'standalone'
}

const { withContentlayer } = require('next-contentlayer');
module.exports = withContentlayer(nextConfig);