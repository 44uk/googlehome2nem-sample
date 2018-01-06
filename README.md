# googlehome2nem-example

`Google Home`で`NEM API`への問い合わせの結果を返してもらうサンプル実装です。

- [heroku/node-js-getting-started: Getting Started with Node on Heroku](https://github.com/heroku/node-js-getting-started)

これをベースに必要な実装をしました。

`Google Home`の応答には`Dialogflow`というのを用いています。ここら辺を参考にしました。

- [Basics  |  Dialogflow](https://dialogflow.com/docs/getting-started/basics)
- [Dialogflow入門 - Qiita](https://qiita.com/kenz_firespeed/items/0979ceb05e4e3299f313#entity%E3%82%92%E4%BD%9C%E3%82%8B)

今回`Dialogflow`に設定した内容はリポジトリにありません。特筆するとすれば`intent`の`action`にソース中で分岐に利用している`balance`/`price`を設定してください。

この実装ではNodeJSを使っていますが、POSTリクエストを受けられて、[Fulfillment  |  Dialogflow](https://dialogflow.com/docs/fulfillment#webhook-example)に沿ったレスポンスを返せればなんでもよさそうです。

当方はこのコードを`Heroku`へデプロイして動作確認しました。

ソースコード中のコメント通り、Poloniexのホットウォレットをハードコードしているので、それ以外の残高は教えてくれません。

Googleアカウントごとに、アドレスと呼び出し名を紐づけるような仕組みを作ったらいい感じかもしれません。
