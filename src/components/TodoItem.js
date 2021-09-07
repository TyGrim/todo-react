function TodoItem({ todo, deleteTodo }) {
  return (
    <li>
      {todo.todo} <button onClick={() => deleteTodo(todo.id)}>Remove</button>
    </li>
  );
}
export { TodoItem };
export default TodoItem;
