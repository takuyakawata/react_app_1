import  { useState } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
// import { Calendar } from '../components/Calendar';

export const Todo = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (selectedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo === selectedTodo ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div>
      <h1>ToDoリスト</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      {/* <Calendar todos={todos} /> */}
    </div>
  );
};