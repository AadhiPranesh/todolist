import TodoItems from "./TodoItems";

const TodoDisplay = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="todo-display-container">
      {tasks.length === 0 ? (
        <p className="empty-message">✨ Your task list is empty. Create your first task above!</p>
      ) : (
        <div className="todo-display">
          {tasks.map((item) => (
            <TodoItems
              key={item.id}
              task={item}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoDisplay;