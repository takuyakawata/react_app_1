import { useState } from 'react'; 

// アロー関数を使用してTodoコンポーネントを定義
export const TodoForm = ({ addTodo }) => {

  const [value, setValue] = useState('');
  const [datetime, setDatetime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({ text: value, datetime: datetime, isCompleted: false });
    setValue('');
    setDatetime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="タスクを入力してください"
      />
      <input
        type="datetime-local"
        value={datetime}
        onChange={(e) => setDatetime(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
};