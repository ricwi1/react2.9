import { formatDistanceToNow } from "date-fns"
import { useState } from "react";
import PropTypes from "prop-types";


function Task({
  id,
  created,
  status,
  description,
  toggleStatus,
  editTask,
  deleteTask,
  saveTask
}) {

  const date = created ? new Date(created) : new Date();
  const result = isNaN(date)
      ? "Invalid date"
      : formatDistanceToNow(date, { addSuffix: true });

  const isEditing = status === "editing";
  const [value, setValue] = useState(description);
  const onKeyDown = (e) => {
      if (e.key === "Enter") {
      const newDescription = value.trim();
      saveTask(id, newDescription);
    }
  };

  return (
    <li className={status}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={status === "completed"}
          onChange={() => toggleStatus(id)}
        />

        <label>
          <span className="description">{description}</span>
          <span className="created">{result}</span>
        </label>

        <button
          className="icon icon-edit"
          onClick={() => editTask(id)}
        />

        <button
          className="icon icon-destroy"
          onClick={() => deleteTask(id)}
        />
      </div>

      {isEditing && (
        <input
          type="text"
          className="edit"
          value = {value}
          onChange ={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
        />
      )}
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["active", "completed", "editing"]).isRequired,
  created: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]).isRequired,

  toggleStatus: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
};

function TaskList({ tasks, ...props}) {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ul className="todo-list">
      {tasks.map(el => (

        <Task
          key={el.id}
          {...el}
          {...props}
        />
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.oneOf(["active", "completed", "editing"]).isRequired,
      created: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,

  toggleStatus: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
};

export default TaskList