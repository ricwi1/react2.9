import { formatDistanceToNow } from "date-fns"

function Task({ created, status, description }) {
    
    const date = created ? new Date(created) : new Date();
  const result = isNaN(date) ? "Invalid date" : formatDistanceToNow(date, { addSuffix: true });
        
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
        </li>
    );
}

export default Task