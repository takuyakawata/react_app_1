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
      <p>お探しの授業がすぐに見つかる！！</p>
      <input 
        type="text" 
        value={classReserve} 
        onChange={(e) => setClassReserve(e.target.value)} 
        placeholder="授業名を入力してください"
      />
      <ActionButton text="予約する" action={handleReserve} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"/>
      <p>{classReserveResult}</p>
    </>
  );
};