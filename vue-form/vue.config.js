const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { // EsLint 에러 화면에 표시 안 함
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    }
  }
})
