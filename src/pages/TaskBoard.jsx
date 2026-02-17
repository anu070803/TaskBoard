import { useState, useEffect } from "react";

function TaskBoard() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [logs, setLogs] = useState(
    JSON.parse(localStorage.getItem("logs")) || []
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("logs", JSON.stringify(logs));
  }, [tasks, logs]);

  const addLog = (msg) => {
    setLogs([{ msg, time: new Date().toLocaleString() }, ...logs]);
  };

  const addTask = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      status: "Todo",
      createdAt: new Date().toLocaleString()
    };

    setTasks([...tasks, newTask]);
    addLog("Task created");

    setTitle("");
    setDescription("");
    setPriority("Low");
    setDueDate("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    addLog("Task deleted");
  };

  const editTask = (id) => {
    const newTitle = prompt("Edit task title:");
    if (!newTitle) return;

    setTasks(tasks.map(t =>
      t.id === id ? { ...t, title: newTitle } : t
    ));

    addLog("Task edited");
  };

  const handleDrag = (e, id) => {
    e.dataTransfer.setData("taskId", id);
  };

  const handleDrop = (e, status) => {
    const id = e.dataTransfer.getData("taskId");

    setTasks(tasks.map(t =>
      t.id == id ? { ...t, status } : t
    ));

    addLog("Task moved");
  };

  const resetBoard = () => {
    if (!window.confirm("Reset all tasks?")) return;
    setTasks([]);
    setLogs([]);
    localStorage.clear();
  };

  return (
    <div>
      <h2>Task Board</h2>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br /><br />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /><br /><br />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select><br /><br />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      /><br /><br />

      <button onClick={addTask}>Add Task</button>
      <button onClick={resetBoard}>Reset Board</button>

      <br /><br />

      <input
        placeholder="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {["Todo", "Doing", "Done"].map(col => (
          <div
            key={col}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, col)}
            style={{ border: "1px solid black", padding: "10px", width: "220px" }}
          >
            <h3>{col}</h3>

            {tasks
              .filter(t =>
                t.status === col &&
                t.title.toLowerCase().includes(search.toLowerCase())
              )
              .map(task => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDrag(e, task.id)}
                  style={{ border: "1px solid gray", margin: "5px", padding: "5px" }}
                >
                  <b>{task.title}</b>
                  <p>{task.description}</p>
                  <p>Priority: {task.priority}</p>
                  <p>Due: {task.dueDate}</p>

                  <button onClick={() => editTask(task.id)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              ))}
          </div>
        ))}
      </div>

      <h3>Activity Log</h3>
      {logs.map((log, i) => (
        <p key={i}>{log.msg} - {log.time}</p>
      ))}
    </div>
  );
}

export default TaskBoard;
