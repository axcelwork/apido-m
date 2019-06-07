# apido-m
Markdown形式でAPIドキュメントを作成できます。

## 使い方
### 1. クローンする

クローンしたあとは、`npm install` を行ってください

### 2. コンパイルと出力

下記コマンドを実行すればサーバが立ち上がり、コンパイル環境が整います。

```
npm run start:project
```

### 3. resources/doc/api.md を編集する

編集すると自動的にHTMLが更新され、ブラウザもリフレッシュされます。
と同時に `/doc/` 内に `api_document.pdf` が作成されます。

## 記法
基本は通常のMarkDownと同様ですが、一部オリジナルの記法があります。

### ドキュメントタイトル
`#` はドキュメントタイトルです。
必ず1つだけにしてください。
HTMLでは`<h1>`に変換され、ページタイトルに適用されます。

**Example**
```:md
# ドキュメントタイトル
```

### API名
`##` はAPI名になります。
HTMLでは`<h2>`に変換され、API名と左メニューに使用されます。

**Example**
```:md
## API名
```

### HTTP,POST/GET/返却タイプ
プロトコル、取得方法、返却タイプは下記のようにリスト記法を`<index>`で括ってください。

**Example**
```
<index>

- HTTPS
- POST
- application/json

</index>
```

### サンプル等ソースの表示
ソースの表示はコード記法を`<source>`で括ってください。
`**TEXT**`の強調記法は見出し要素となります。

```
<source>

**PRODUCTION**
\`\`\`
https://example.com/add
\`\`\`

**STAGING**
\`\`\`
https://stg.example.com/add
\`\`\`

</source>
```