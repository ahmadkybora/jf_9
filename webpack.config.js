var path = require('path');

module.exports = () => {
  return {
      // این قسمت در اصل ادرس روت ماژول ها را مینویسیم
      // کگه ورودی همه از این قسمت میباشد
        entry: {
        main: "./src/main.js",
        },
        // اینجا هم ادرس فایلی است که باندل میشود
        output: {
            filename: "index.js",
            path: path.resolve(__dirname, "public"),
        },
        devServer: {
          historyApiFallback: true, // SPA
          // بوسیله دو سرور میتوانید بر روی
          // پورت خاصی گوش کنید
          // port: 3001
        },
        module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"],
                  },
                },
              },
              {
                test: /\.html$/i,
                use: ["html-loader"],
              },
              {
                test: /\.css$/i,
                use: ["css-loader"],
              },
            ],
          },
    }
}