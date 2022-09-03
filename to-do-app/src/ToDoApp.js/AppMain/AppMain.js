import React from "react";
import ItemList from "./ItemList";

export default function AppMain({ tasks, setTasks, selectedOption}) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ItemList setTasks={setTasks} tasks={tasks} selectedOption={selectedOption} />
    </section>
  );
}
