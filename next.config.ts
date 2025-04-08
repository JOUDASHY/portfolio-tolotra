const nextConfig = {
  output: 'export', // Active l'export statique
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Désactive l'optimisation d'images (requise pour l'export statique)
  },
};

export default nextConfig;