const Autoprefixer = require('autoprefixer');
const SortMediaQueries = require('postcss-sort-media-queries');

module.exports = {
  plugins: [
    Autoprefixer,
    SortMediaQueries,
  ],
};
