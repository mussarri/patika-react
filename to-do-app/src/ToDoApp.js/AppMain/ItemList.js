import React from "react";

export default function ItemList({ tasks, setTasks, selectedOption}) {
  let filtered
  if(selectedOption === "All") filtered = tasks
  else if(selectedOption === "Active") filtered = tasks.filter(i => !i.completed)
  else if(selectedOption === "Completed") filtered = tasks.filter(i => i.completed)

  return (
    <ul className="todo-list">
      {filtered.map((item) => (
        <li key={item.task} className={!item.completed ? "" : "completed"}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => {
                const newArray = tasks.map((x) => {
                  if (x.task === item.task) {
                    return { task: item.task, completed: !item.completed };
                  }
                  return x;
                });
                setTasks(newArray);
              }}
            />
            <label>{item.task}</label>
            <button
              className="destroy"
              onClick={() => {
                setTasks((oldArray) =>
                  oldArray.filter((i) => i.task !== item.task)
                );
              }}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}
