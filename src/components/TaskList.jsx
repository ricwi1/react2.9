import { formatDistanceToNow } from "date-fns"

function Task({
  id,
  created,
  status,
  description,
  toggleStatus,
  editTask,
  deleteTask,
}) {
  const date = created ? new Date(created) : new Date();
  const result = isNaN(date)
    ? "Invalid date"
    : formatDistanceToNow(date, { addSuffix: true });

  const isEditing = status === "editing";

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
          defaultValue={description}
        />
      )}
    </li>
  );
}

function TaskList({ tasks, toggleStatus, editTask, deleteTask }) {

  return (
    <ul className="todo-list">
      {tasks.map(el => (
        <Task
          key={el.id}
          {...el}
          toggleStatus={toggleStatus}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
export default TaskList