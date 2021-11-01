const path = require("path");

module.exports = {
  entry: "./scr/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
