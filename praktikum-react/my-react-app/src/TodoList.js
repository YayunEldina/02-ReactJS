import React, { useState } from "react";

// Komponen untuk menampilkan daftar tugas
function TodoItem({ task, onDelete }) {
  return (
    <li>
      {task} <button onClick={onDelete}>Hapus</button>
    </li>
  );
}

// Komponen utama TodoList
function TodoList() {
  const [tasks, setTasks] = useState([]); // State daftar tugas
  const [newTask, setNewTask] = useState(""); // State untuk input tugas baru

  // Menangani perubahan input
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Menambah tugas baru ke daftar
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); // Reset input setelah menambah tugas
    }
  };

  // Menghapus tugas dari daftar
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Tambahkan tugas..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Tambah</button>

      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
