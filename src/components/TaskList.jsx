import { formatDistanceToNow } from "date-fns"

function Task({ created, status, description }) {
    
    const date = created ? new Date(created) : new Date();
    const result = isNaN(date) ? "Invalid date" : formatDistanceToNow(date, { addSuffix: true });
    
     const isEditing = status === "editing";

  return (
    <li className={status}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{description}</span>
          <span className="created">{result}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>

      {isEditing && (
        <input type="text" className="edit" defaultValue="Editing task" />
      )}
    </li>
  );
}

function TaskList({tasks}) {
     console.log(tasks);
     return( 
        <ul className="todo-list"> 
            {tasks.map((el) => ( 
                <Task
                    key={el.id}
                    created={el.created} 
                    status={el.status} 
                    description={el.description} 
                /> 
            ))} 
        </ul> 
    ); 
}

export default TaskList