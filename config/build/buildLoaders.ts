import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./type/config";

export function buildLoaders(options:BuildOptions):webpack.RuleSetRule[]{


  //если не TS, то нужен babel-loader
  const typescriptLoader =  {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // "style-loader", //создаёт "стайл" узлы из строк ДЖС
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: true,
        }
      },  //переводит css в коммонДЖС
      "sass-loader", //компиллирует сасс в цсс
    ],
  }

  return [
   typescriptLoader,
   cssLoader,
  ]
}