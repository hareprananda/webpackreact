import * as webpack from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";
import CommonConfig from "./webpack.common";
import HtmlWebpackPlugin from "html-webpack-plugin";

interface Configuration extends webpack.Configuration {
  devServer?: DevServerConfiguration;
}

const config = (env: Record<string, string>): Configuration => ({
  ...CommonConfig,
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: env.PORT || 3000,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});

export default config;
