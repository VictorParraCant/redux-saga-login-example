const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin  = require("extract-text-webpack-plugin");


const SOURCE_DIR = path.resolve(__dirname, "client");
const STYLES_DIR = path.resolve(__dirname, "client/styles");
const NODE_DIR = path.resolve(__dirname, "node_modules");

module.exports = {
    devtool: process.env.WEBPACK_DEVTOOL || "eval-source-map",
    entry: [
        "babel-polyfill",
        "webpack-hot-middleware/client",
        STYLES_DIR+"/index.less",
        SOURCE_DIR+"/index.js"
    ],
    output: {
        path: "/static",
        publicPath: "/static"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: SOURCE_DIR,
                exclude: NODE_DIR,
                loaders: ["react-hot","babel"]
            },
            {
                test: /\.less$/,
                include: STYLES_DIR,
                loader: ExtractTextPlugin.extract("css?sourceMap!less?sourceMap")
            },
            {
                test: /\.(otf|eot|svg|ttf|woff2?)$/,
                loader: "url-loader?limit=8192"
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("bundle.css", {allChunks: true}),
    ],
    resolve: {
        modulesDirectories: [
            NODE_DIR,
            SOURCE_DIR
        ],
        extensions: ["", ".js"]
    }
};
