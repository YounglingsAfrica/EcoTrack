module.exports = {
    // Other webpack configurations...
    devServer: {
      // Other devServer configurations...
      clientLogLevel: 'warn', // This will reduce the amount of logs.
      hot: true, // Enable HMR.
      quiet: true, // This will hide all the console logs except for errors.
    },
};