// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development', // ローカル開発用環境に設定
  entry: './test/app_spec.js',
  output: {
    filename: 'test-main.js',
    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, 'test')
  },
  devServer: {
    contentBase: 'test', // ルートフォルダの設定
    open: true // 実行時にブラウザが自動的に localhost を開く
  }
};