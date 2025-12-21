import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ task, onDelete, onToggle, onUpdate }) => {
  
  // تحديد الألوان الجانبية بناءً على الأولوية كما هو مطلوب في التاسك
  const borderColor = {
    High: '#dc3545',  // أحمر
    Medium: '#ffc107', // أصفر
    Low: '#28a745'     // أخضر
  };

  return (
    <div className={styles.item} style={{ borderLeft: `6px solid ${borderColor[task.priority]}` }}>
      <div className={styles.content}>
        {/* التعديل هنا: استخدام task.taskName بدلاً من task.name لظهور النص */}
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