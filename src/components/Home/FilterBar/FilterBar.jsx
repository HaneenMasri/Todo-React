//src/components/Home/FilterBar/FilterBar.module.css
import styles from './FilterBar.module.css';

const FilterBar = ({ activeFilter, onFilterChange }) => {
  const priorities = ['All', 'High', 'Medium', 'Low'];

  return (
    <div className={styles.filterSection}>
      <span className={styles.filterLabel}>Filter by Priority: </span>
      <div className={styles.filterGroup}>
        {priorities.map(p => (
          <button 
            key={p} 
            className={`${styles.filterBtn} ${activeFilter === p ? styles.active : ''}`} 
            onClick={() => onFilterChange(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;