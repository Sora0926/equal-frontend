import type { StorybookConfig } from '@storybook/nextjs';

const path = require("path");
const rootPath = path.resolve(__dirname, "../src/");

const storybookConfig: StorybookConfig = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
            },
            url: false,
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../src/"),
    });
    if (config.module?.rules) {
      config.module.rules = config.module.rules.map((rule) => {
        // HACK: Override SVG loader to not use file-loader
        if (rule !== '...' && rule.test?.toString().indexOf('svg') !== -1) {
          rule.exclude = /\.svg$/
        }
        return rule
      })
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        issuer: /\.tsx$/,
      })
    }
    config.resolve.alias["@"] = rootPath;
    return config
  },
}

export default storybookConfig
