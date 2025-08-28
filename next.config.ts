import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    /* 部分预渲染配置 */
    experimental: {
        ppr: 'incremental'
    }
};

export default nextConfig;
