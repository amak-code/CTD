import TodoListItem from './TodoListItem.jsx';

// const todos = [
//   { id: 1, title: 'review resources' },
//   { id: 2, title: 'take notes' },
//   { id: 3, title: 'code out app' },
// ];

function TodoList({ todoList, onCompleteTodo }) {
  const filteredTodoList = todoList.filter((todo) => !todo.isCompleted);
  console.log(filteredTodoList);

  return (
    <div>
      {filteredTodoList.length === 0 ? (
        <p>Add todo above to get started</p>
      ) : (
        <ul>
          {filteredTodoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onCompleteTodo={onCompleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
