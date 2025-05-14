const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // aceita qualquer domínio
      },
    ],
  },
};

module.exports = nextConfig;
