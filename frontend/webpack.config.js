module.exports = {
  entry: "./src/index.js",
  target: "web",
  resolve: {
      fallback: {
          "fs": false,
          "crypto": false,
          "path": false,
          "os": false,
      },
  },
  devServer: {
    // Other devServer configurations...
    clientLogLevel: 'warn', // This will reduce the amount of logs.
    hot: true, // Enable HMR.
    quiet: true, // This will hide all the console logs except for errors.
  },
};