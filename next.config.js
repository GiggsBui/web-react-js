const withSass = require("@zeit/next-sass");
const webpack = require('webpack');

module.exports = withSass();
module.exports = {
    publicConfig: {
        API_URL: process.env.API_URL
    },
  
    webpack: (config) => {
        const env = { 
            API_KEY: process.env.API_KEY 
        };
        config.plugins.push(new webpack.DefinePlugin(env));
        return config;
    },
};
