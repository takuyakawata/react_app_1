
import { useState } from "react";

import { ActionButton } from "../components/ActionButton";

export const Janken = () => {

    const [jankenResult, setJankenResult] = useState({
    myHand: "入力待ち",
    comHand: "待機中",
    result: "未対戦",
    });
    //データの保持をするため　
    const [history, setHistory] = useState([]);
    
    // 🔽 「自分の手」を入力して，「自分の手，相手の手，勝敗」を持ったオブジェクトを出力する関数
  const getJankenResult = (myHand) => {
    const hand = ["グー", "チョキ", "パー"];
    const myIndex = hand.indexOf(myHand);
    const comIndex = Math.floor(Math.random() * 3);
    const resultSheet = [
      ["Draw", "Win", "Lose"],
      ["Lose", "Draw", "Win"],
      ["Win", "Lose", "Draw"],
    ];
    return {
      myHand: myHand,
      comHand: hand[comIndex],
      result: resultSheet[myIndex][comIndex],
    };
  };
    
// 🔽 ボタンクリック時に実行する「じゃんけんをして結果を保存する関数」
  const getJanken = (myHand) => {
    const result = getJankenResult(myHand);
      setJankenResult(result);
      
      setHistory([result, ...history]);
  };
    
  return (
    <>
      <p>じゃんけんの画面</p>
      {/* 🔽 まずはグーボタンのみ実装．引数を入力して関数を実行する場合は `() => 関数名()` の形にする必要がある */}
      <ActionButton text="グー" action={() => getJanken("グー")} />
      <ActionButton text="チョキ" action={() => getJanken("チョキ")} />
      <ActionButton text="パー" action={() => getJanken("パー")} />
      {/* 🔽 タグ内は文字列のみ使用できるのでJSON形式に変換して動作確認 */}
      <p>自分の手：{jankenResult.myHand}</p>
      <p>相手の手：{jankenResult.comHand}</p>
      <p>結果：{jankenResult.result}</p>
          
      <p>履歴</p>
      <table>
        <thead>
          <tr>
            <th>自分の手</th>
            <th>相手の手</th>
            <th>結果</th>
          </tr>
        </thead>
        <tbody>
          {/* 🔽 履歴の配列から要素を生成して表示する */}
          {history.map((x, i) => (
            <tr key={i}>
              <td>{x.myHand}</td>
              <td>{x.comHand}</td>
              <td>{x.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    
  );
};