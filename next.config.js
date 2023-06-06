"use strict"

const path = require('path');
const withPlugins = require('next-compose-plugins');
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');
const { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER, PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/**
 *
 * @param { string } phase
 * @param {{ defaultConfig: import("next").NextConfig }} config
 * @returns { Promise<import("next").NextConfig> }
 */
const individualConfig = async (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
      }
    }
  }
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      env: {
      }
    }
  }
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      env: {
      }
    }
  }
  return defaultConfig;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...individualConfig,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "ja"],
  //   localePath: "./locale",
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    disableStaticImages: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }
    config.plugins.push(new WindiCSSWebpackPlugin());
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          titleProp: true,
          titleId: 'filePath',
          svgo: false,
        }
      },
    });
    return config;
  },
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const plugins = [
  withMDX
];

module.exports = withPlugins(plugins, nextConfig);
