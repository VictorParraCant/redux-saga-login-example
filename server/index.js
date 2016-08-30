// Express imports
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// APP
const app = express();
const port = 3000;

// bodyParser
app.use(bodyParser.json());

// Routes
const loginRoute = require("./routes/loginRoute");
const sigupRoute = require("./routes/signupRoute");
app.use("/api/login", loginRoute);
app.use("/api/signup", sigupRoute);


// Webpack middleware
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("../webpack.config.js");
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

// Routes
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/index.html"));
});

// Listen
app.listen(port, (error) => {
    if (error) { console.error(error); }
    else { console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port); }
});
