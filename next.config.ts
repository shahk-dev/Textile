import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        domains: ["perinatal.zumaredu.uz"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "perinatal.zumaredu.uz",
                pathname: "**",
            },
        ],
    },
    reactStrictMode: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);




