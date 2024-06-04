/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreDuringBuilds:true
    },
    typescript:{
        ignoreBuildErrors:true,
    
      },
    // experimental:{
    //     swcPlugins:[
    //         ["next-superjson-plugin",{}]
    //     ]
    // },
    images: {
        domains:[
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com"
        ]
    }
}

module.exports = nextConfig
