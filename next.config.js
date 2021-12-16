/* jshint node: true */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'cloudinary',
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
