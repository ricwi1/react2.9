import { useState } from 'react'
import { formatDistanceToNow } from "date-fns"

const Title = () => { 
    return <h1>todos</h1>;
};

function NewTaskForm ({ className, placeholder, addTask}) {
    const [value, setValue] = useState("");
    const onKeyDown = (e) => {
      if (e.key === "Enter") {
      const newTaskDescription = value.trim();
      addTask(newTaskDescription);
    }
  };
    return (
        <input 
            className={className} 
            placeholder ={placeholder} 
            onChange ={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
        />
    );
};

function Header({addTask}) {
    return (
        <header className="header">
            <Title />
            <NewTaskForm 
                className="new-todo" 
                placeholder ="What needs to be done?"
                addTask={addTask} 
                autoFocus
            />
        </header>
    );
}

export default Header