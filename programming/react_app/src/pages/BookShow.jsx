// pages/BookShow.jsx


import { useState, useEffect } from "react";
// idの受け取り
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const BookShow = () => {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "books", id);
    getDoc(docRef).then((documentSnapshot) => {
      console.log(documentSnapshot);
      setBook({ ...documentSnapshot.data(), id: documentSnapshot.id });
      setLoading(false);
    });
  }, []);
    

  const update = async (isCompleted) => {
    const docRef = doc(db, "books", id);
    await updateDoc(docRef, { isCompleted });

    const newDocumentSnapshot = await getDoc(docRef);
    setBook({ ...newDocumentSnapshot.data(), id: newDocumentSnapshot.id });
    alert("Done!");
  };

  if (loading) {
    return <p>loading now...</p>;
  }

  return (
    <>
      <p>本詳細の画面</p>
      <table>
        <tbody>
          <tr>
            <td>場所</td>
            <td>{book.place}</td>
          </tr>
          <tr>
            <td>天気</td>
            <td>{book.weather}</td>
          </tr>
          <tr>
            <td>読んだ本</td>
            <td>{book.book}</td>
          </tr>
          <tr>
            <td>感想</td>
            <td>{book.text}</td>
          </tr>
          <tr>
            <td>ステータス</td>
            <td>{book.isCompleted ? "うんち" : "ぽんち"}</td>
          </tr>
        </tbody>
    </table>

    <p>この本を．．．</p>
    <div>
        <button onClick={() => update(true)}>読み終わった</button>
        <button onClick={() => update(false)}>今読んでる</button>
    </div>
    </>
  );
};
