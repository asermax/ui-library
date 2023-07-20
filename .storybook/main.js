const path = require("path");
module.exports = {
  stories: ["../components/**/stories/**/*.stories.mdx", "../components/**/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.alias,
      "@asermax/button": path.resolve(__dirname, "../components/button/src"),
    };
    return config;
  },
};
