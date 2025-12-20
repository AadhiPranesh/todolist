import { useState } from "react";

const Addlist = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle("");
    }
  };

  return (
    <div className="add-list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Create a new task..."
          className="task-input"
        />
        <button type="submit" className="add-btn">
          ✨ Add Task
        </button>
      </form>
    </div>
  );
};

export default Addlist;