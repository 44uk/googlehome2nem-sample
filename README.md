# googlehome2nem-example

`Google Home`で`NEM API`への問い合わせの結果を返してもらうアシスタントを作ってみた成果物です。

- [heroku/node-js-getting-started: Getting Started with Node on Heroku](https://github.com/heroku/node-js-getting-started)

サーバサイドはこれをベースに必要な実装をし、`Heroku`へデプロイして動作確認しました。

`Google Home`の応答には`Dialogflow`というのを用いています。ここら辺を参考にしました。

- [Basics  |  Dialogflow](https://dialogflow.com/docs/getting-started/basics)
- [Dialogflow入門 - Qiita](https://qiita.com/kenz_firespeed/items/0979ceb05e4e3299f313#entity%E3%82%92%E4%BD%9C%E3%82%8B)
- [DialogflowでGoogleアシスタント対応アプリを作成しよう：Google Homeプログラミングを始めよう - ＠IT](http://www.atmarkit.co.jp/ait/articles/1712/08/news025.html)

今回`Dialogflow`に設定した内容はリポジトリにありません。特筆するとすれば`intent`の`action`にソース中で分岐に利用している`balance`/`price`を設定してください。

この実装ではNodeJSを使っていますが、POSTリクエストを受けられて、[Fulfillment  |  Dialogflow](https://dialogflow.com/docs/fulfillment#webhook-example)に沿ったレスポンスを返せればなんでもよさそうです。

ソースコード中のコメント通り、Poloniexのホットウォレットをハードコードしているので、それ以外の残高は教えてくれません。

Googleアカウントごとに、アドレスと呼び出し名を紐づけるような仕組みを作ったらいい感じかもしれません。

(GoogleアシスタントやDialogflowにあまり詳しくないので雑なコミットになりましたが、詳しい人がもっと面白いものを作ってくれる…はず。
なにが云いたいかというと要はほかのWebAPIと同様にNEM APIを使えるんだから、アイディア次第でいろいろできるでしょってこった)
