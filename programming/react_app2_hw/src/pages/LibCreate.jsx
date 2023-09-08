import React, { useState } from "react";
import axios from "axios";

export const LibCreate = () => {
  // 書籍情報を保存するためのステート
  const [lib, setLib] = useState([]);
  const [keyword, setKeyword] = useState(""); // 検索キーワードを格納するステート

  const getLib = async () => {
    try {
      const response = await axios.get(
        `https://api.calil.jp/library?appkey=ace893a7a64f7319bcf499f5fabc9&format=json&pref=${keyword}`
      );

      const placeLib = response.data;
      if (placeLib && placeLib.length > 0) {
        setLib(placeLib);
      } else {
        setLib([]); // データが見つからなかった場合、空の配列に設定
      }
    } catch (error) {
      console.error("Error fetching library data:", error);
      setLib([]); // エラーが発生した場合も空の配列に設定
    }
  };

  return (
    <>
      <p>キーワードで図書館を検索する</p>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={getLib}>検索</button>
      <table>
        <thead>
          <tr>
            <th>図書館名</th>
            <th>所在地</th>
            <th>電話番号</th>
            <th>ウェブサイト</th>
          </tr>
        </thead>
        <tbody>
          {lib.map((library, index) => (
            <tr key={index}>
              <td>{library.formal}</td>
              <td>{`${library.pref} ${library.city} ${library.address}`}</td>
              <td>{library.tel}</td>
              <td>
                <a href={library.url_pc} target="_blank" rel="noopener noreferrer">
                  リンク
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};