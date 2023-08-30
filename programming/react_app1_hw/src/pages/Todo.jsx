import { useState } from "react";

import { ActionButton } from "../components/ActionButton.jsx";

import '../index.css';

import { ActionInput } from "../components/ActionInput.jsx";

export const Todo = ()=>{

// やることといつまでのステートを持つ
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

    //データの保持をするため
    const [history, setHistory] = useState([]);

// 🔽 「自分の手」を入力して，「自分の手，相手の手，勝敗」を持ったオブジェクトを出力する関数
// ボタンクリック時の処理
  const handleAddTodo = () => {
    // 入力されたやることと日付を履歴に追加
    const newTodo = {
      text: todo,
      date: date,
    };
    console.log(newTodo);


    // 新しい履歴を前に追加してステートを更新
    setHistory([newTodo, ...history]);

    // 入力フォームをクリア
    setTodo("");
    setDate("");
};
return (
    <>
      <p>やることリストの画面</p>
      {/* 🔽 まずはグーボタンのみ実装．引数を入力して関数を実行する場合は `() => 関数名()` の形にする必要がある */}
        <tr>
            <th>やること</th>
            <th>いつまで</th>
            <th>できた！</th>
        </tr>
        <tbody>
      <tr>
        <div class="mb-4">
      <ActionInput text={todo} date={date} setText={setTodo} setDate={setDate} />
          {/* <ActionButton text="追加" action={() => handleAddTodo} /> */}
        <ActionButton text="追加" action={() => handleAddTodo()} />
 
        </div>
            </tr>
        </tbody>
    

      <div class="bg-black text-white min-h-screen">
      <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">やることリスト</h1>

        <table class="w-full border text-white">
          <thead>
            <tr class="bg-gray-800">
              <th class="py-2 px-4">完了</th>
              <th class="py-2 px-4">やること</th>
              <th class="py-2 px-4">いつまで</th>
            </tr>
          </thead>
          <tbody>
            {history.map((x, i) => (
              <tr key={i} class="border-t border-gray-600">
                <td class="py-2 px-4"><input type="checkbox"/></td>
                <td class="py-2 px-4">{x.text}</td>
                <td class="py-2 px-4">{x.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>

);
   };