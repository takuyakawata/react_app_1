// pages/Omikuji.jsx
//データの保持
import { useState } from "react";
//
import { ActionButton } from "../components/ActionButton.jsx";


export const Omikuji  = () => {

  const [omikujiResult, setOmikujiResult] = useState("");

  const getOmikuji = () => {
    const result = ["大吉", "中吉", "小吉", "凶", "大凶"][
      Math.floor(Math.random() * 5)
    ];
    console.log(result);

    setOmikujiResult(result);
  };

  return (
    <>
      <p>おみくじの画面</p>
      {/* 🔽 編集 */}
      <ActionButton text="おみくじをひく" action={getOmikuji} />

      <p>{omikujiResult}</p>
    </>
  );
};