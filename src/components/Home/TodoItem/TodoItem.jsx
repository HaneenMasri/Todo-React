import styles from './TodoItem.module.css';

const TodoItem = ({ task, onDelete, onToggle, onUpdate }) => { //props
  
  const borderColor = {
    High: '#dc3545',  
    Medium: '#ffc107',
    Low: '#28a745'     
  };

  return (
    <div className={styles.item} style={{ borderLeft: `6px solid ${borderColor[task.priority]}` }}>
      <div className={styles.content}>
        <input 
          className={`${styles.taskInput} ${task.completed ? styles.completed : ''}`}
          value={task.taskName} 
          onChange={(e) => onUpdate(task.id, e.target.value)}
          spellCheck="false"
        />
        <span className={styles.priorityLabel}>{task.priority} Priority</span>
      </div>

      <div className={styles.actions}>
        <button 
          className={task.completed ? styles.undoBtn : styles.doneBtn} 
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? 'Undo' : 'Done'}
        </button>
        <button className={styles.deleteBtn} onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;