module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',  // ローカル開発用環境に設定
  devServer: {
    contentBase: 'dist',    // ルートフォルダの設定
    open: true              // 実行時にブラウザが自動的に localhost を開く
  }
};
