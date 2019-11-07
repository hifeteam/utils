const path = require('path');

module.exports = ({ config }) => {
  // ts
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      }
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');

  // scss
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../src'),
  });

  return config;
};
