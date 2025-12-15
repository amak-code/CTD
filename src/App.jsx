import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [newTodo, setNewTodo] = useState('New todo will appear here');
  return (
    <>
      <h1>ToDo List</h1>
      <TodoForm />
      <p>{newTodo}</p>
      <TodoList />
    </>
  );
}

export default App;
