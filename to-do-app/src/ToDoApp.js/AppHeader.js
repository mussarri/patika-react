import React, { useState } from "react";

export default function AppHeader({ setTasks, tasks }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length < 3) alert("Enter minimum 3 character");
    else if (tasks.find((i) => i.task === input))
      alert("This task already added");
    else
      setTasks((oldArray) => [...oldArray, { task: input, state: "waiting" }]);
    e.target.reset();
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
