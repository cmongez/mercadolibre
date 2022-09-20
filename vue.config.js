const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/sass/main.scss";`,
      },
      // pass Less.js Options to less-loader
    },
  },
});
