import React, { useState } from "react";
import TodoDisplay from "./TodoDisaply";
import Addlist from "./Addlist";
import { v4 as uuidv4 } from 'uuid';

const TodolistContainer = () => {
  const initialTodos = [
    { id: uuidv4(), title: "Buy groceries", completed: true },
    { id: uuidv4(), title: "Walk the dog", completed: false },
    { id: uuidv4(), title: "Finish project report", completed: false }
  ];

  const [tasks, setTasks] = useState(initialTodos);

  const addTask = (title) => {
    if (title.trim()) {
      setTasks([...tasks, { id: uuidv4(), title: title, completed: false }]);
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const pendingCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="todolist-container">
      <h1 className="heading">✨ Task Manager</h1>
      <div className="stats">
        <span className="stat pending-stat">⏳ Pending: {pendingCount}</span>
        <span className="stat completed-stat">✅ Completed: {completedCount}</span>
      </div>
      <Addlist addTask={addTask} />
      <TodoDisplay tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default TodolistContainer;
