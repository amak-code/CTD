import TodoListItem from './TodoListItem.jsx';

const todos = [
  { id: 1, title: 'review resources' },
  { id: 2, title: 'take notes' },
  { id: 3, title: 'code out app' },
];

function TodoList() {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
