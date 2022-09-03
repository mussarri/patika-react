import React, { useState } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain/AppMain";

export default function ToDoApp() {
  const [selectedOption, setSelectedOption] = useState("All");
  const [tasks, setTasks] = useState([
    { task: "Javascript", completed: false },
    { task: "Python", completed: false },
  ]);
  return (
    <section className="todoapp">
      <AppHeader setTasks={setTasks} tasks={tasks}/>
      <AppMain tasks={tasks} setTasks={setTasks} selectedOption={selectedOption}/>
      <AppFooter setTasks={setTasks} tasks={tasks} setSelectedOption={setSelectedOption} selectedOption={selectedOption}/>
    </section>
  );
}
