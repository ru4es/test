# tenkibot

## 仕様

- 毎日午後5時になったら起動
- 次の日が雨ならあるチャンネルに「明日は雨です」と投稿してくれる

## メモ

要素
- 定時実行するのはどこで？ -> サーバは？ Glitch
- どこを見て雨判定を決める？ -> 降水確率と、場所の2つの視点
- チャンネル指定 -> 環境変数で指定できるようにする

```ts
const channel = process.env.CHANNEL
client.once('ready', () => {
  (channel).send('明日の天気は〜！')
  exit()
})
```