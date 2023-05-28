/** @type { import('@storybook/nextjs').StorybookConfig } */
const storybookConfig = {
  stories: [
    '../app/_components/**/*.stories.mdx',
    '../app/_components/**/*.stories.@(|ts|tsx)'
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
  typescript: { reactDocgen: false },
  staticDirs: ["../public"],
  webpackFinal: (config) => {
    config.resolve = {
      extensions: [".ts", ".tsx", ".css", ".scss"],
      fallback: {
        fs: false,
        path: false,
      },
    };
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              auto: true,
            },
            url: false,
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../"),
    });
    if (config.module?.rules) {
      config.module.rules = config.module.rules.map((rule) => {
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
    return config
  },
}

export default storybookConfig
