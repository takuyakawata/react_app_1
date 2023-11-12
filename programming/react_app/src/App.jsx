
// import { ActionButton } from "./components/ActionButton";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import './App.css';

import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import { BookCreate } from "./pages/BookCreate";
import { BookIndex } from "./pages/BookIndex";
import { BookShow } from "./pages/BookShow";
import { Reserve } from "./pages/Reserve";
import { Todo } from "./pages/Todo";


const App = () => {
  return (
    <BrowserRouter>
      <h1>react app</h1>
       <ul>
        <li>
          <Link to="/omikuji">おみくじ</Link>
        </li>
        <li>
          <Link to="/janken">じゃんけん</Link>
        </li>
        <li>
          <Link to="/book-create">投稿する</Link>
        </li>
        <li>
          <Link to="/book-index">一覧表示</Link>
        </li>
         <li>
          <Link to="/reserve">予約入力</Link>
        </li>
         <li>
          <Link to="/todo">やることリストの入力</Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/book-create" element={<BookCreate />} />
        <Route path="/book-index" element={<BookIndex />} />
        <Route path="/book-show/:id" element={<BookShow />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;