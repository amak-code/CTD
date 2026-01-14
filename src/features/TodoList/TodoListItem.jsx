import { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';

const TodoListItem = ({ todo, onCompleteTodo, onUpdateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);
  const handleCancel = () => {
    setWorkingTitle(todo.title);
    setIsEditing(false);
  };
  const handleEdit = (e) => {
    console.log(e.target.value);
    setWorkingTitle(e.target.value);
  };

  const handleUpdate = (e) => {
    if (!isEditing) {
      return;
    }

    e.preventDefault();
    const updatedTodo = { ...todo, title: workingTitle };
    onUpdateTodo(updatedTodo);
    setIsEditing(false);
  };

  return (
    <li>
      <form action="" onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" onClick={handleUpdate}>
              Save
            </button>
          </>
        ) : (
          <>
            <label>
              <input
                type="checkbox"
                id={`checkbox${todo.id}`}
                checked={todo.isCompleted}
                onChange={() => onCompleteTodo(todo.id)}
              />
            </label>
            <span onClick={() => setIsEditing(true)}>{todo.title}</span>
          </>
        )}
      </form>
    </li>
  );
};

export default TodoListItem;
