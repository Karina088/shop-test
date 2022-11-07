module.exports = {
    // entry - точкa входа
    entry: './script',
    output: {
        filename: './build.js'
    }
};

// Если мы сообщим вебпаку путь до этого файла, он использует его для создания графа зависимостей приложения. Для этого необходимо добавить свойство entry в настройки вебпака со значением пути к главному файлу
// example:
// added loaders for css and styles code in the html
// module.exports = {
//     entry: './app/index.js',
//     module: {
//       rules: [
//         { test: /\.svg$/, use: 'svg-inline-loader' },
//         { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
//       ]
//     }
//   }

// Теперь вебпак знает о точке входа и лоадерах. Следующим шагом является указание директории для бандла. Для этого нужно добавить свойство output в настройки вебпака.
