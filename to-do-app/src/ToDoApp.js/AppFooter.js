import React from "react";

export default function AppFooter({ tasks, setTasks, selectedOption, setSelectedOption }) {
  const options = ["All", "Active", "Completed"];

  const removeCompletedTasks = () => {
    setTasks((oldTasks) => oldTasks.filter((i) => !i.completed));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{tasks.filter((i) => !i.completed).length} </strong>
        items left
      </span>

      <ul className="filters">
        {options.map((option) => (
          <li>
            <a
              href="#/"
              className={option === selectedOption && "selected"}
              onClick={() => {
                setSelectedOption(option);
              }}
            >
              {option}
            </a>
          </li>
        ))}
      </ul>

      <button onClick={removeCompletedTasks} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}
