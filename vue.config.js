module.exports = {
  publicPath: '',

  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: true
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
};
