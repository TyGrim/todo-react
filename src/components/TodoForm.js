import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

function TodoForm({ todos, addTodo }) {
  const [todo, setTodo] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('submit', todo);
        addTodo({
          id: uuidv4(),
          todo,
        });
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
