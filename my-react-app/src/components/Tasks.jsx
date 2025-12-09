import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'

function TaskForm({ className, placeholder}) {
    return <input className={className} placeholder ={placeholder} />
}

function Task(props) {
    
    const result = formatDistanceToNow(new Date(props.date), { addSuffix: true });
    
    return (
        <div className="task">
            <input className="toggle" type="checkbox" />
            <label>
              <span className="description">{props.text}</span>
              <span className="created">{result}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    );
}

function TaskList() {
    return(
        <div className="taskList">
            <TaskForm className="NewTaskForm" placeholder ="What needs to be done?" />
            <div className ="todo-list">
                <Task text="Completed task" date={new Date()} />
                <TaskForm className="EditingTask" placeholder="Editing task" />
                <Task text="Active task" date={new Date()} />
            </div>
        </div>
    );
}

export default TaskList