import { useRef } from 'react';
import { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');
  const todoTitleInput = useRef(null);
  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo(workingTodoTitle);
    setWorkingTodoTitle('');
    todoTitleInput.current.focus();
  };
  return (
    <>
      <form action="" onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">ToDo</label>
        <input
          name="title"
          type="text"
          id="todoTitle"
          ref={todoTitleInput}
          value={workingTodoTitle}
          onChange={(e) => setWorkingTodoTitle(e.target.value)}
        />
        <button type="submit" disabled={workingTodoTitle.length === 0}>
          Add ToDo
        </button>
      </form>
    </>
  );
}

export default TodoForm;
