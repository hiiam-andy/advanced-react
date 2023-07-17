import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./type/config";

export function buildLoaders({isDev}:BuildOptions):webpack.RuleSetRule[]{

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
}

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
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]" 
              : "[hash:base64:8]",
            }
          },
      },  //переводит css в коммонДЖС
      "sass-loader", //компиллирует сасс в цсс
    ],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
        {
            loader: 'file-loader'
        }
    ]
}


  return [
   typescriptLoader,
   cssLoader,
   svgLoader,
   fileLoader
  ]
}