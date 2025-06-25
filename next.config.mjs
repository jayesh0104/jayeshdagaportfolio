/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn-icons-png.flaticon.com', 'img.icons8.com'], // Add the domains here
      },
      devIndicators: {
        autoPrerender: false, // Disable auto prerendering indication
        buildActivity: false, // Disable the build activity indicator
      },
      output: 'export',
};

export default nextConfig;
