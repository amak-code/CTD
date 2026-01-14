import { useRef } from 'react';
import { useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';

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
        <TextInputWithLabel
          label="ToDo"
          value={workingTodoTitle}
          //onChange={setWorkingTodoTitle}
          onChange={(e) => setWorkingTodoTitle(e.target.value)}
          ref={todoTitleInput}
          elementId="todoTitle"
        />
        <button type="submit" disabled={workingTodoTitle.length === 0}>
          Add ToDo
        </button>
      </form>
    </>
  );
}

export default TodoForm;
