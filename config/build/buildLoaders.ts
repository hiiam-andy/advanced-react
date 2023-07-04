import webpack from "webpack";

export function buildLoaders():webpack.RuleSetRule[]{


  //если не TS, то нужен babel-loader
  const typescriptLoader =  {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader", //создаёт "стайл" узлы из строк ДЖС
      "css-loader",  //переводит css в коммонДЖС
      "sass-loader", //компиллирует сасс в цсс
    ],
  }

  return [
   typescriptLoader,
   cssLoader,
  ]
}