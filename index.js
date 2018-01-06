const fetch = require ("node-fetch");
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

// Zaifの時価APIのレスポンスを扱うのも、NEMネットワークから残高を引き出すのも
// 処理はおんなじです(ここがNEM APIのお手軽な所だよ)
function fetchXemPrice() {
  return fetch("https://api.zaif.jp/api/1/last_price/xem_jpy")
    .then(data => data.json())
    .then(data => data.last_price)
  ;
}

function fetchBalanceByAddress(addr) {
  return fetch(`http://62.75.171.41:7890/account/get?address=${addr}`)
    .then(data => data.json())
    .then(data => (data.account.balance / 1000000))
  ;
}

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app
  .post('/', (req, res) => {
    const action = req.body.result.action;
    if(action === "balance") {
      // Poloniexのホットウォレットをハードコードしたが、
      // 例えばgoogleアカウントにアドレスと呼び出し名を紐づけて
      // 「ウォレット１の残高は？」みたいな呼び出しができるといいね
      fetchBalanceByAddress("NBZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3D")
        .then(balance => {
          response = `ウォレット１の残高は${balance}ゼムです`;
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({
            "speech": response,
            "displayText": response
          }));
        })
      ;
    }

    if(action === "price") {
      fetchXemPrice()
        .then(price => {
          response = `XEMは現在${price}円で取引されています`;
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({
            "speech": response,
            "displayText": response
          }));
        })
      ;
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
;
