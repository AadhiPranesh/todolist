const TodoItems = ({ task, toggleTask, deleteTask }) => {
  const { id, title, completed } = task;

  return (
    <div className={`todo-item ${completed ? 'completed' : 'pending'}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
        className="checkbox"
      />
      <p className="task-title">{title}</p>
      <button
        onClick={() => deleteTask(id)}
        className="delete-btn"
        title="Delete task"
      >
        🗑️
      </button>
    </div>
  );
};

export default TodoItems;