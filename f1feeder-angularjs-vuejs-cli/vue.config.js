module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        { test: /\.html$/, exclude: /node_modules/, loader: 'html-loader' },
      ],
    },
  },
};
