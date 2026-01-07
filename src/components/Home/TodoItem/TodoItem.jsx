import styles from './TodoItem.module.css';

const TodoItem = ({ task, onDelete, onToggle, onUpdate }) => {
  return (
    <div
      className={`${styles.item}
        ${task.priority === 'High' && styles.high}
        ${task.priority === 'Medium' && styles.medium}
        ${task.priority === 'Low' && styles.low}
      `}
    >
      <div className={styles.content}>
        <input
          className={`${styles.taskInput} ${task.completed && styles.completed }`}
          value={task.taskName}
          onChange={(e) => onUpdate(task.id, e.target.value)}
          spellCheck="false"
        />

        <div className={styles.priorityLabel}>
          {task.priority} Priority
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className={task.completed ? styles.undoBtn : styles.doneBtn}
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? 'Undo' : 'Done'}
        </button>

        <button
          className={styles.deleteBtn}
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
