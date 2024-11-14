const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  entry: './js/editor/editor.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['javascript', 'css', 'html', 'typescript'],
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 8080,
  },
};
