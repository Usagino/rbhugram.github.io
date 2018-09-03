# パンを紹介するサイトを作ろう！

![](https://media.giphy.com/media/5n3K9XD2bpMJCpv6Wz/giphy.gif)

上の画像のようなサイトを作ってみよう！
## 素材
![top.jpg](https://qiita-image-store.s3.amazonaws.com/0/204436/0504cd21-e0d8-4093-2a67-0bd08cbc07ed.jpeg)

top.jpg

![Baguette.jpg](https://qiita-image-store.s3.amazonaws.com/0/204436/a5bb794b-52fa-b5c9-dd79-67cee57d1233.jpeg)

Baguette.jpg

![Croissant.jpg](https://qiita-image-store.s3.amazonaws.com/0/204436/923a3fb6-1413-d9bd-39ef-57486ec9deba.jpeg)

Croissant.jpg

![Danish.jpg](https://qiita-image-store.s3.amazonaws.com/0/204436/3c7b5fa5-8bff-df28-d6de-c9ef5282c945.jpeg)

Danish.jpg

はじめる前に、これから作業を行うフォルダの中に`material`というフォルダと`stylesheet`というフォルダを作っておこうmaterial`は「要素」という意味だ。この中に画像を入れたりしてくれ！

`stylesheet`は「スタイルシート」、つまりcssファイルはこの中に入れることになるぞ！



## htmlの作成
***index.htmlというファイルを作ってくれ！***


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>

    <title>Document</title>
  </head>
  <body>
    <main>

    </main>
  </body>
</html>
```
ここまで打ち込んでみよう！

これはHTMLの形式的な形になるぞ！

ブラウザ( Chromeかfirefox)にindex.htmlをドラッグアンドドロップしてみよう
何も表示されない真っ白い画面が出てきたら成功だ！

それではbodyタグの中に下の文を打っていこう

```html
<section class="page top">
  <div class="parallax"></div>
</section>

<section class="page1">
  <h2>Baguette</h2>
  <p>好きなぶんを入れよう！</p>
  <div class="parallax"></div>
</section>

<section class="page2">
  <h2>Croissant</h2>
  <p>好きなぶんを入れよう！</p>
  <div class="parallax"></div>
</section>

<section class="page3">
  <h2>Danish</h2>
  <p>好きなぶんを入れよう！</p>
  <div class="parallax"></div>
</section>

```

次に```main```タグの中に上記の文を打ち込もう!
「好きな文を入れよう!」の中には好きな文を入れてもいいし、```lorem```と打ち込みTabキーを押してみてね



と長い文章が出てくるはずだ。文章自体に何も意味を持たず、いわゆる「ここに文字をいれるとこういうふうに見えるぞ」というやつだ。
これは君が使っているであろうVScodeやAtomに入っている***emmet***という機能のおかげだ。
ものによってはemmetが入ってない場合もある。

## reset.css
次にstylesheetというフォルダの中にreset.cssというファイルを作ろう
作ったら下のcssをコピーペーストして保存。
コピーペーストの仕方はmacのcommand＋Cを押して、貼り付けたい所にcommand＋Vをおそう





```css
@charset "UTF-8";
body, div, dl, dt, dd, p, ul, ol, li, form, textarea,input, table, th, tr, td, h1, h2, h3, h4, h5,blockquote,figure {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

body {
  width: 100%;
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: 100%;
  line-height: 1.6;
  font-family: Arial, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "メイリオ", Meiryo, sans-serif;
  font-size: 16px;
  position: relative;

}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}

h1, h2, h3, h4, h5, th {
  font-weight: normal;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

ul, ol {
  list-style: none;
}

a {
  display: block;
  text-decoration: none;
}

img {
  border: 0;
  vertical-align: bottom;
}

input, select {
  vertical-align: middle;
}


/* clearfix */

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
```

これはreset.cssという魔法のスタイルシートだ！。
HTMLでサイトを作るときはこいつを読み込んでおくと、```ul li```タグの邪魔な黒点とかが表示されなくなってくれたり、bodyタグになぜかついているmarginも０になってくれるぞ！

HTMLの方でもreset.cssを読み込んでおこう

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <link rel="stylesheet" href="stylesheet/reset.css"/>
    <title>Document</title>
```

なんで```stylesheet/reset.css```と書くんだって？？
それはファイルのデータ構造がこうなっているからだ

![file_1.png](https://qiita-image-store.s3.amazonaws.com/0/204436/ddd9ece0-233a-f12a-3f56-309aa5432f13.png)


`stylesheet/reset.css`は`index.html`と同じ階層にある`stylesheet`というフォルダの中に入っている`reset.css`を参照する。という意味だ

`stylesheet/reset.css`を「スタイルシートの中のreset.css」と読めば覚えやすいね！


## スタイルシート
それではいよいよcssをガツガツ書いて行こう
```style.css```という新しいファイルを作ろう！


```css
main {
  overflow: hidden;
}
```

それではmainタグの高さを`3000px`にしてみよう
上の文章になにを加えたらmainの高さは3000pxになるかな

```css
section {
  width: 100%;
  min-height: calc(100vh * 1.5);
  position: relative;
  overflow: hidden;
}

section h2 {
  top: 200px;
  left: 100px;
  position: absolute;
  z-index: 100;
  color: #333;
}
```
それではsection要素のh2の文字の大きさを大きくしてみよう。なんpxにしたらいいかな


```css
section p {
  top: 400px;
  left: 100px;
  width: 50%;
  position: absolute;
  color: #444;
  line-height: 1.8;
  z-index: 50;
}
```
`position:ralative;`と指定することで要素を***相対的***に決めることができます。
下の四つを加えることで決められた分だけ離すぞ！。
`top:10px;`とすることで上から`10px`離す。
`left:10px;`とすることで左から`10px`離す。
`bottom:10px;`とすることで下から`10px`離す。
`right:10px;`とすることで右から`10px`離す。



```css

.page {
  background-image: url(画像のパス);
  background-attachment: fixed;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
}
```
こんかい新しく使う`background-attachment`これはスクロールした時の背景の動きに手を加えることができるプロパティだ。`fixed`のほかにも`scroll`があるが、今回は`fixed`を選ぼう。

`background-position`これは背景画像のどの位置を表示するかを決めることができる。
右が上下で左が左右だ。それぞれ値を変えることで位置をへんこうできるぞ。

```css

.page1 .parallax {
  background-attachment: fixed;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(画像のパス);
  min-height: calc(100vh * 1.5);
  width: 100%;
}

```
`min-height`こいつは以外と便利だ！ 要素の最低限の大きさを決めることができる。100pxと指定すれば100pxより小さくならない。逆に`max-height`　もあるので覚えておこう。


```css

.page2 .parallax {
  background-attachment: fixed;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(画像のパス);
  min-height: calc(100vh * 1.5);
  width: 100%;
}
.page3 .parallax {
  background-attachment: fixed;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(画像のパス);
  min-height: calc(100vh * 1.5);
  width: 100%;
}

.page3 p, .page3 h2 {
  left: 600px;
}




```
