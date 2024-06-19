/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports ={ nextConfig,
    env : {
        authKey : process.env.AUTH_BEARER
    }

}
