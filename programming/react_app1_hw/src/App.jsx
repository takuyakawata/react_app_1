
import { ActionButton } from "./components/ActionButton";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import { Todo } from "./pages/Todo";
import './index.css';




const App = () => {
  return (
    <BrowserRouter>
      <h1>react app 課題</h1>
       <h2>======OOアプリ=====</h2>
       <ul>
        <li>
          <Link to="/omikuji">おみくじ</Link>
        </li>
        <li>
          <Link to="/janken">じゃんけん</Link>
        </li>
        <li>
          <Link to="/todo">やることリスト</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>

  );
};
export default App;
