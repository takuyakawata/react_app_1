// pages/BookCreate.jsx

import { useState, useEffect } from "react";
// 入力formの設定
import { useForm } from "react-hook-form";
import axios from "axios";
import weatherJson from "../static/weather.json";
//db接続
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


export const BookCreate = () => {
  // 🔽 追加
  const { register, handleSubmit, setValue } = useForm({
    shouldUnregister: false,
  });

  // 🔽 追加
  const onSubmit = async (data) => {
    console.log(data);
    const result = await addDoc(collection(db, "books"), {
      ...data,
      isCompleted: false,
      timestamp: serverTimestamp(),
    });
    console.log(result);
    alert("Done!");
  };

  const [loading, setLoading] = useState(true);

  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("");
  const [geoLocation, setGeoLocation] = useState(null);
  const [place, setPlace] = useState("");
  const [weather, setWeather] = useState("");

  const getBooks = async (keyword) => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
      const result = await axios.get(`${url}${keyword}&key=AIzaSyA6iEgTWB8xYJGWOHs4qV7f40eEWpNqOzk`);
      setBooks(result.data.items ?? []);
  };

  const selectBook = (book) => {
    setBook(book.volumeInfo.title);
    // 🔽 追加
    setValue("book", book.volumeInfo.title);
  };

  const success = async (position) => {
    const { latitude, longitude } = position.coords;
    setGeoLocation({ latitude, longitude });
    const placeData = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    setPlace(placeData.data.display_name);
    // 🔽 追加
    setValue("place", placeData.data.display_name);
    const weatherData = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FTokyo`
    );
    setWeather(weatherJson[weatherData.data.daily.weathercode[0]]);
    // 🔽 追加
    setValue("weather", weatherJson[weatherData.data.daily.weathercode[0]]);
    setLoading(false);
  };

  const fail = (error) => console.log(error);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, fail);
  }, []);

  if (loading) {
    return <p>now loading...</p>;
  }

  return (
    <>
      {/* 🔽 追加（form タグ） */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <tbody>
            <tr>
              <td>場所</td>
              {/* 🔽 編集 */}
              <td>
                <input
                  type="text"
                  {...register("place", { required: true })}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td>天気</td>
              {/* 🔽 編集 */}
              <td>
                <input
                  type="text"
                  {...register("weather", { required: true })}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td>読んだ本</td>
              {/* 🔽 編集 */}
              <td>
                <input
                  type="text"
                  {...register("book", { required: true })}
                  readOnly
                />
              </td>
            </tr>
            {/* 🔽 追加 */}
            <tr>
              <td>感想</td>
              <td>
                <input type="text" {...register("text", { required: true })} />
              </td>
            </tr>
          </tbody>
        </table>
        {/* 🔽 追加 */}
        <button>送信</button>
      </form>
      <p>キーワードで検索する</p>
      <input type="text" onChange={(e) => getBooks(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>書籍名</th>
            <th>出版社</th>
            <th>出版年</th>
            <th>リンク</th>
          </tr>
        </thead>
        <tbody>
          {books.map((x, i) => (
            <tr key={i}>
              <td>
                <button type="button" onClick={() => selectBook(x)}>
                  選択
                </button>
              </td>
              <td>{x.volumeInfo.title}</td>
              <td>{x.volumeInfo.publisher}</td>
              <td>{x.volumeInfo.publishedDate}</td>
              <td>
                <a
                  href={x.volumeInfo.infoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};