const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // ДОБАВЬ ЭТОТ ПАРАМЕТР:
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/IP_Belkin_final_stage/'  // ← Замени на имя репозитория!
    : '/'

})
