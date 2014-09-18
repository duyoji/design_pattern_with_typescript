# デザインパターン練習環境(typescript)

## 前提

以下のツールがインストールされている

- NodeJS(v0.10.26で動作確認)
- lineman
- typescript
- grunt
- typedoc(typescriptのドキュメントジェネレータ)

## 参考サイト

デザインパターン : http://www.techscore.com/tech/DesignPattern/index.html/

## ドキュメント生成

「$ lineman run」したタイミング、watchの状態でファイルに変更があったタイミングで
「app/js/**/*.ts」のファイルがdocsディレクトリが作成されドキュメントがdocsディレクトリ内に作成される。
(config/plugins/typescript.coffeeで定義)