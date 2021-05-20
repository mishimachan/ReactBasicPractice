/** eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/colorfulMessage";
import { ColorfulMessage } from "./components/colorfulMessage";
/**
 * ファイルの拡張子についてのメモ
 * .jsのままファイルを実行しても問題ないが
 * .jsxとすることで、Reactで作成したコンポーネントということがわかり易くなる。
 * そのため、.jsxに変更して作成するのが主流。
 */
/**
 * コンポーネントの命名規則のメモ
 * コンポーネント名は、必ず先頭を大文字から始めるようにする（パスカルケース）
 */
const App = () => {
  console.log("最初");
  // useState():Reactで準備されている、stateを使う時の関数。
  // state:状態が変化する処理を入れたい時に使うもの。例：入力欄とか
  // 配列の中身は任意の名前を付けれるが、第一がstate名、stateを更新していく関数名を書く。
  // useState()のカッコ内は、state名の初期値を入れられる。
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 関心の分離：再レンダリングの弊害を緩和するためのもの
  // useEffect()　の第一引数には関数を入れられる。
  // 第二引数に空の配列を持たせると、初回起動時のみしかこの関数は通らなくなる
  // useEffect(() => {
  //   console.log("useEffect!!");
  // }, []);
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhastive-deps
  }, [num]);

  return (
    /**
     * returnで返せるHTMLのタグは一種類にまとめる必要がある。（reactの決まり）
     * そのため<div></div>タグでまとめる必要があるが、divタグで画面要素を分けたくない時もある。
     * その時は、<React.Fragment></React.Fragment>か<></>で括ることで
     * 画面に影響なくタグを一種類にまとめて表示できる。
     */
    <>
      {/* cssはstyle={{}}で指定する。
       外{}は、JavaScriptを記述する。
       内{}は、JavaScriptのオブジェクトを記述する。*/}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* コンポーネントに対してpropsを渡す。
      props:引数のようなもの。ここでは、colorとmessageを示す。props名は任意でつけてよし */}
      {/* <ColorfulMessage color="blue" message="お元気ですか"/> */}

      {/* HTMLタグ同様に、表示内容をタグで囲ってしまう書き方 */}
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      {/* reactではタグの中に処理させたい動作を指定し、{}の中にjavaScriptを書くことができる */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* faceShowFlagがtrueの時、右側を表示する（＆＆の使い方） */}
      {faceShowFlag && <p>( ´ ▽ ` )</p>}
    </>
  );
};

// ファイル外でもApp.jsで宣言した関数を使えるようにする方法
export default App;
