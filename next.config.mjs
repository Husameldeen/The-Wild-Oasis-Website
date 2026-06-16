/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vwjnjvwretfvnjuiqska.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "lh3.googleusercontent.com",
      //   port: "",
      //   pathname:
      //     "/a/ACg8ocJDh-EYACq5ixlNMsrwC4H6OnrlDsM2vJfJwuQC5RtgM2vz2w=s96-c",
      // },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
// https://lh3.googleusercontent.com/a/ACg8ocJDh-EYACq5ixlNMsrwC4H6OnrlDsM2vJfJwuQC5RtgM2vz2w=s96-c

// {
//   protocol: "https",
//   hostname: "lh3.googleusercontent.com",
//   port: "",
//   pathname:
//     "/a/ACg8ocJDh-EYACq5ixlNMsrwC4H6OnrlDsM2vJfJwuQC5RtgM2vz2w=s96-c",
// },
