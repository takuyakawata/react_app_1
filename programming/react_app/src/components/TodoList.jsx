import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, toggleComplete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};