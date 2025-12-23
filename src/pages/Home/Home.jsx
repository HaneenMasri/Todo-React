// src/pages/Home/Home.jsx
import { useState } from 'react';
import TodoForm from '../../components/Home/TodoForm';
import TodoItem from '../../components/Home/TodoItem';
import FilterBar from '../../components/Home/FilterBar'; 
import styles from './Home.module.css';

const Home = () => { 
  const [tasks, setTasks] = useState([]); 
  const [filter, setFilter] = useState('All');

  const addTask = (data) => {//data is an object containing taskName and priority coming from TodoForm
    const newTask = { 
      id: Date.now(), 
      taskName: data.taskName, 
      priority: data.priority,
      completed: false 
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const updateTaskName = (id, newName) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, taskName: newName } : t));
  };

  const filteredTasks = tasks.filter(t => 
    filter === 'All' ? true : t.priority === filter
  );

  return (
    <div className={styles.container}>
      <div className={styles.todoBox}>
        <h1 className={styles.title}>To-Do List</h1>
        
        {/* المكونات الثلاثة الأساسية */}
        <TodoForm onAdd={addTask} />
        <FilterBar activeFilter={filter} onFilterChange={setFilter} />

        <div className={styles.listSection}>

          {filteredTasks.length === 0 ? (
            <p className={styles.empty}>No tasks yet!</p>
          ) : (
            <div className={styles.list}>
              {filteredTasks.map(task => (
                <TodoItem 
                  key={task.id} 
                  task={task} 
                  onDelete={deleteTask} 
                  onToggle={toggleTask} 
                  onUpdate={updateTaskName}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;