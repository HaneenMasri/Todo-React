import { useState ,useEffect} from 'react';
// تصحيح المسارات لتطابق الهيكلية الجديدة في مجلد components/Home
import TodoForm from '../../components/Home/TodoForm';
import TodoItem from '../../components/Home/TodoItem';
import FilterBar from '../../components/Home/FilterBar'; 
import styles from './Home.module.css';
import { initialMocks } from '../../mocks';

const Home = () => { 
  // 1. تعريف الـ State (ذاكرة المكون)
const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem('my_tasks');
  // إذا كان الـ localStorage فارغاً، سيأخذ الـ initialMocks كقيمة افتراضية
  return savedTasks ? JSON.parse(savedTasks) : initialMocks;
});  const [filter, setFilter] = useState('All'); // حالة الفلتر الحالي
useEffect(() => {
  localStorage.setItem('my_tasks', JSON.stringify(tasks));
}, [tasks]); // سيقوم بالحفظ تلقائياً عند إضافة أو حذف أي مهمة
  // 2. وظيفة إضافة مهمة جديدة
  const addTask = (task) => {
    setTasks([...tasks, { 
      ...task, 
      id: Date.now(), // استخدام الوقت كمعرف فريد
      completed: false 
    }]);
  };

  // 3. وظيفة حذف مهمة
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // 4. تبديل حالة الإنجاز (Done/Undo)
  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // 5. تعديل اسم المهمة (Inline Editing)
  const updateTaskName = (id, newName) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, taskName: newName } : t));
  };

  // 6. منطق الفلترة بناءً على الأولوية المختارة
  const filteredTasks = tasks.filter(t => 
    filter === 'All' ? true : t.priority === filter
  );

  return (
    <div className={styles.container}>
      <div className={styles.todoBox}>
        <h1 className={styles.title}>To-Do List</h1>
        
        {/* قسم الفورم */}
        <div className={styles.section}>
          <TodoForm onAdd={addTask} />
        </div>

        {/* قسم الفلترة باستخدام المكون المنفصل FilterBar */}
        <div className={styles.section}>
          <FilterBar 
            activeFilter={filter} 
            onFilterChange={setFilter} 
          />
        </div>

        {/* قسم عرض المهام */}
        <div className={styles.listSection}>
          {filteredTasks.length === 0 ? (
            <div className={styles.emptyWrapper}>
              <p className={styles.empty}>No tasks yet!</p>
            </div>
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