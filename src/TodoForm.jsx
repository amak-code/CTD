import { useRef } from 'react';

function TodoForm({ onAddTodo }) {
  const todoTitleInput = useRef(null);
  const handleAddTodo = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    onAddTodo(title);
    e.target.title.value = '';
    todoTitleInput.current.focus();
  };
  return (
    <>
      <form action="" onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">ToDo</label>
        <input name="title" type="text" id="todoTitle" ref={todoTitleInput} />
        <button type="submit">Add ToDo</button>
      </form>
    </>
  );
}

export default TodoForm;
