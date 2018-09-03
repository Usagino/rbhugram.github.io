# ES6のクラスについて
---

## オブジェクトの復習
クラスについて学習する前に、少し「学習コースⅡ」で学んだ「オブジェクト」について復習しましょう。オブジェクトは下図のように、複数の値をプロパティという名前をつけて管理できるものでした。

```js
const user ={
  name:"にんじゃわんこ",
  age:14
};
console.log(user,age);
```
結果：14

## オブジェクトと関数(1)
オブジェクトの「値」の部分には、関数を用いることもできます。
下図のようにプロパティの値として関数を記述します。また、その関数を呼び出すには、「``定数名.プロパティ名()``」とします。プロパティ名の後ろの()を忘れないようにしましょう。
よく使う書き方なので、この機会に覚えておきましょう。

```js
const 定数名 ={
  プロパティ名:()=>{
    処理
  }
};
定数名.プロパティ名();
```

## オブジェクトと関数(2)
具体例を見てみましょう。
左の図では、オブジェクトの「greet」プロパティに対応する値に関数（アロー関数）を用いています。
そして、「user.gree()」とすることで関数が実行され、コンソールに表示されています。
```js
const user ={
  name:"にんじゃわんこ",
  greet:()=>{
    console.log("こんにちわ!");
  }
};
user.greet();
```
結果：こんにちわ！

## クラス
「`設計図`」のことをJavaScriptでは「`クラス`」と呼びます。
図のように「`class クラス名`」とすることで新しくクラスを用意できます。なお、クラス名は基本的に大文字から始めるようにしましょう。

```js
class User{
  処理
}
```

## インスタンスの生成
オブジェクトを生成するための設計図を用意できたので、その設計図から実際にオブジェクトを生成してみましょう。クラスからオブジェクトを生成するには、図のように「`new クラス名()`」とします。
クラスから生成したオブジェクトは特別に`インスタンス`と呼びます。また、Animalクラスの`インスタンス`をAnimalインスタンスと呼びます。

```js
class Animal {

}
const animl = new Animal();
```
![](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/es6/study/4/1532500104498.png)

## インスタンスの確認
今回はAnimalクラスから生成したAnimalインスタンスをコンソールに出力し、右の図のようにインスタンスが空のオブジェクトであることを確認してみましょう。（{}の前にクラス名のAnimalも表示されますが、気にしないでください。）

```js
class Animal {

}
const animal = new Animal();
console.log(animal);
```
結果：Animal{}

空のオブジェクトが返ってくる

## コンストラクタとは
クラスには`コンストラクタ`と呼ばれる機能が用意されています。コンストラクタはインスタンスを生成するときに実行したい処理や設定を追加するための機能です。
まず、図のように、クラスの中括弧 { } 内に「`constructor() { }`」と記述します。

```js
class Animal {
  constructor() {

  }
}
```

## コンストラクタの処理
図のように、コンストラクタの中には処理を記述することができます。
ここに書いた処理はインスタンスが生成された直後に実行されます。
大切なのは、インスタンスごとに毎回実行されるということです。以下の図では2回「new Animal()」としているので、その度にコンストラクタ内の処理が実行されます。

```js
class Animal {
  constructor() {
    console.log("こんにちわ");
  }
}
const animal1 = new Animal();
const animal2 = new Animal();
```
結果：
こんにちわ
こんにちわ

## プロパティを追加する
コンストラクタの中で、生成したインスタンスに関する情報を追加してみましょう。
コンストラクタの中で「`this.プロパティ = 値`」とすることで、生成されたインスタンスにプロパティと値を追加することができます。

```js
class Animal {
  constructor() {
    this.name = "レオ";
  }
}
```

## インスタンスとプロパティ
最初に説明した通り、インスタンスとはオブジェクトですので、コンストラクタの中で追加した値は、「`インスタンス.プロパティ`」とすることでクラスの外で使用できます。

```js
class Animal {
  constructor() {
    this.name = "レオ";
  }
}

const animal = new Animal();
console.log(animal.name);
```
結果：
レオ

## コンストラクタの引数
コンストラクタに引数として値を渡すには、「`new クラス名()`」の括弧「`( )`」内に値を追加します。
以下の図では、文字列「"レオ"」という値が引数として渡され、コンストラクタ内では「name」として使うことができます。

```js
class Animal {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
}

const animal = new Animal("レオ",14);
```
## メソッドとは
ここからクラスの重要な機能の1つである「`メソッド`」について学習していきましょう。
メソッドとはそのインスタンスの「動作」のようなものです。「名前」や「年齢」などの情報はプロパティで追加したのに対して、メソッドは「挨拶をする」「値を計算する」などの処理のまとまりを表します。

![](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/es6/study/4/1532937627406.png)

## メソッドの使い方
メソッドは、そのクラスから生成したインスタンスに対して呼び出します。
具体的には、以下の図のように「`インスタンス.メソッド名()`」とすることでそのメソッドを呼び出し、処理を実行することができます。

```js
class Animal {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log("こんにちわ");
  }
}

const animal = new Animal("レオ",14);
animal.greet();
```
結果：
こんにちわ

greetという名前は任意で決めれる

## メソッド内で値を扱う
では次に、「name」の値を用いて「名前は〇〇です」と出力するメソッドを作成してみましょう。
メソッド内でインスタンスの値を使用するには、「`this`」という特殊な値を用いて、「`this.プロパティ名`」とします。

```js
class Animal {
  info(){
    console.log(`名前は${this.age}です`);
  }
}

const animal = new Animal("レオ",3);
animal.info();
```

## メソッド内でメソッドを使う
メソッド内で他のメソッドを呼び出すことも可能です。
以下の図のように、メソッド内で「`this.メソッド名()`」とすることで、同じクラスの他のメソッドを使うことができます。

```js
class Animal {
  greet(){
    console.log("こんにちわ");
  }
  info(){
    this.greet();
  }
}

const animal = new Animal("レオ",3);
animal.info();
```

## ファイルの分割
コードの量が増えてくると1つのファイルで管理するのが大変になるため、複数のファイルでコードを管理することがあります。
今回は、メインのプログラムを実行する「script.js」と、Animalクラスを定義する「animal.js」の2つのファイルにコードを分けてみましょう。

![](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/es6/study/4/1533013999425.png)

---

実は、ただ複数のファイルにコードを分けるだけではうまく動作しません。
今回の場合、Animalクラスが「script.js」でも使用できるように設定する必要があります。
次のスライドから、その方法を学習していきましょう。

![](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/es6/study/4/1532942408114.png)

## export
まずは「animal.js」内の「Animalクラス」を他のファイルでも使用できるようにしていきます。
クラスの定義の後で、「`export default クラス名`」とすることで、そのクラスを他のファイルでも使用することができるようになります。

```js
// animal.js
class Animal {
  constructor() {

  }
}

export default Animal;
```

```js
// script.js
import Animal from "./animal.js"
```

## Dogクラスを作ろう

ここまで動物に関するデータを扱う「Animalクラス」を作成してきました。ここからは、犬のデータに特化した「Dogクラス」を作成していきましょう。
新しく作成するクラスが既存のクラスの一種である場合、「継承」という方法を用いることで非常に効率よく作業を進めることができます。

![](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/es6/study/4/1530170877380.png)



## 継承とは

「継承」とは、すでにあるクラスをもとに、新しくクラスを作成する方法のことです。
例えば「Animalクラス」から「Dogクラス」を継承すると、「Animalクラス」の全ての機能を引き継いで、「Dogクラス」を作成することができます。

![](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/es6/study/4/1530171691375.png)

## 継承の書き方

継承を用いてクラスを作成するには「`extends`」を用います。
「Animalクラス」を継承して「Dogクラス」を作成するには、図のように「`class Dog extends Animal`」と書きます。
また、継承では元となるクラスを`親クラス`（今回はAnimalクラス）、新しく作成するクラスを`子クラス`（今回はDogクラス）と呼びます。

```js
import Animal from "./animal.js"
class Dog extends Animal {

}
```
Animalクラスを継承している


## Dogクラスを使う
前のページで作成した「Dogクラス」を「script.js」で使用してみましょう。
そのためには、「script.js」にて「Dogクラス」が読み込めるように設定を追加する必要があります。

![](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/es6/study/4/1532942345331.png)

## 使えるメソッド
「Dogクラス」は「Animalクラス」のすべての機能を引き継いでいます。そのため、「Dogクラス」内にはまだ何もメソッドは定義されていませんが、「Animalクラス」に定義されている「infoメソッド」などを使用することができます。

```js
// animal.js
class Animal {
  info(){
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}
```

```js
// dog.js
class Dog extends Animal{

}
```

```js
// script.js
const dog = new Dog("レオ",4);
dog.info();
```
