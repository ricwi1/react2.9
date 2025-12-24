import { useState } from 'react'
import PropTypes from "prop-types";

const Title = () => { 
    return <h1>todos</h1>;
};

function NewTaskForm ({ 
    className = "new-todo",
    placeholder = "What needs to be done?",
    addTask,
    autoFocus = false
}) {
    const [value, setValue] = useState("");
    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            const newTaskDescription = value.trim();

            if (newTaskDescription) {
                    addTask(newTaskDescription);
                    setValue("");
                }
        }
     };
    return (
        <input 
            className={className} 
            placeholder ={placeholder} 
            value={value}
            autoFocus={autoFocus}
            onChange ={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
        />
    );
};

NewTaskForm.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  addTask: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
};


function Header({addTask}) {
    return (
        <header className="header">
            <Title />
            <NewTaskForm 
                addTask={addTask} 
                autoFocus
            />
        </header>
    );
}

Header.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Header