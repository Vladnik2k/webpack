const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = [{
  mode: 'production',
  optimization: {
    minimize: true
  },
  entry: {
    'js/script': ['./navigator-master/js/script.js', './navigator-master/css/style.css']
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },

      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/css/[name].min.css'
            }
          },
          {
            loader: 'css-loader?-url'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  externals: {
    "$": "jquery"
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./navigator-master/css"),
          to: 'css'
        },
        {
          from: path.resolve(__dirname, "./navigator-master/images"),
          to: 'images'
        },
        {
          from: path.resolve(__dirname, "./navigator-master/plugins"),
          to: 'plugins'
        },
        {
          from: path.resolve(__dirname, "./navigator-master/404.html")
        },
        {
          from: path.resolve(__dirname, "./navigator-master/about.html")
        },
        {
          from: path.resolve(__dirname, "./navigator-master/about.html")
        },
        {
          from: path.resolve(__dirname, "./navigator-master/contact.html")
        },
        {
          from: path.resolve(__dirname, "./navigator-master/index.html")
        },
        {
          from: path.resolve(__dirname, "./navigator-master/onepage.html")
        },
        {
          from: path.resolve(__dirname, "./navigator-master/portfolio.html")
        },
        {
          from: path.resolve(__dirname, "./navigator-master/pricing.html")
        },
        {
          from: path.resolve(__dirname, "./navigator-master/service.html")
        },
        {
          from: path.resolve(__dirname, "./navigator-master/team.html")
        },
        {
          from: "css/*.css",
          context: 'navigator-master'
        },
      ],
    })
  ],
  resolve: {
    extensions: ['.js', '.scss', '.sass', '.css']
  }
}];
