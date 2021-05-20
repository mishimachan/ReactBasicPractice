import React from "react";

// コンポーネント元から引数を受け取る。propsの中にはcolorとmessageが入っている。
export const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    // プロパティ名と変数名が同様である場合、プロパティ名を省略できる。
    color,
    // color: color,
    // color: props.color,
    fontSize: "18px"
  };
  // messageをコンポーネントの中で指定する方法
  // return <p style={contentStyle}>{props.message}</p>;

  // 予め指定された表示メッセージを取得する方法
  // return <p style={contentStyle}>{props.children}</p>;
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
