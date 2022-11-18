module.exports = {
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify")
    }
  }

}
// If you want to include a polyfill, you need to:
//   - add a fallback 'resolve.fallback: { "crypto": require.resolve("crypto-browserify") }'
// - install 'crypto-browserify'
// If you don't want to include a polyfill, you can use an empty module like this:
// resolve.fallback: { "crypto": false }