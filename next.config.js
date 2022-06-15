const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withVideos = require('next-videos')
module.exports = withVideos()
module.exports = withPlugins([optimizedImages], { target: 'serverless' });
