export const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <li style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleComplete(todo)}
        />
        {todo.text} - {new Date(todo.datetime).toLocaleString()}
      </label>
    </li>
  );
};