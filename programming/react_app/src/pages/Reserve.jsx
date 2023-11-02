// pages/Reserve.jsx
//データの保持
import { useState } from "react";
import { ActionButton } from "../components/ActionButton.jsx";

export const Reserve = () => {
  const [classReserve, setClassReserve] = useState("");
  const [classReserveResult, setClassReserveResult] = useState("");

  const handleReserve = () => {
    if (classReserve) {
      setClassReserveResult(`"${classReserve}" が予約されました！`);
    } else {
      setClassReserveResult("授業名を入力してください。");
    }
  };

  return (
    <>
      <p>授業予約の画面</p>
      <input 
        type="text" 
        value={classReserve} 
        onChange={(e) => setClassReserve(e.target.value)} 
        placeholder="授業名を入力してください"
      />
      <ActionButton text="予約する" action={handleReserve} />
      <p>{classReserveResult}</p>
    </>
  );
};