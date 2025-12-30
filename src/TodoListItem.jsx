const TodoListItem = ({ todo, onCompleteTodo }) => {
  onCompleteTodo(todo.id);
  return (
    <li>
      <form action="">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={onCompleteTodo}
        />
        <p>{todo.title}</p>
      </form>
    </li>
  );
};

export default TodoListItem;
