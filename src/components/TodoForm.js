import { useState } from 'react';

function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('submit', todo);
        setTodos([todo, ...todos]);
        setTodo('');
      }}
    >
      <input
        type='text'
        placeholder='Enter To-Do...'
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
    </form>
  );
}

export { TodoForm };
export default TodoForm;
