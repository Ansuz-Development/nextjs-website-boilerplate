const withPlugins = require("next-compose-plugins");
// const webpack = require("webpack");

const withPWA = require("next-pwa");

const path = require("path");
// const {i18n} = require("./next-i18next.config");

module.exports = withPlugins([
  [withPWA, {
    pwa: {
      dest: "public",
      disable: process.env.NODE_ENV === "development",
    },
  }],
], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  // i18n,
  exportPathMap: async function (
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId},
  ) {
    return {
      "/": {page: "/"},
    };
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    loader: "imgix",
    minimumCacheTTL: 60,
    path: "",
  },
  experimental: {
    outputStandalone: true,
  },
  swcMinify: true,
});
