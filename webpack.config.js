module.exports = {
    // other configurations...
    module: {
      rules: [
        // other rules...
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'raw-loader',
            },
          ],
        },
      ],
    },
  };
  