module.exports = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials", 
    // "@storybook/preset-scss",
    {
      name: "@storybook/preset-scss",
      options: {
        sassLoaderOptions: {
          additionalData:
            '@import "./src/styles/_colors.scss"; @import "./node_modules/bootstrap/scss/_functions.scss"; @import "./node_modules/bootstrap/scss/_variables.scss"; @import "./node_modules/bootstrap/scss/_mixins.scss";',
        },
      },
    },
  ],
  framework: "@storybook/html",
  core: {
    "builder": "webpack5"
  }
}


