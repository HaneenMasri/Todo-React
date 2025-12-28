//src/components/Home/FilterBar/FilterBar.jsx

import styles from './FilterBar.module.css';

const priorities = ['All', 'High', 'Medium', 'Low'];

const FilterBar = ({ activeFilter, onFilterChange }) => {
  return (
    <div className={styles.filterSection}>
      <span className={styles.filterLabel}>Filter by Priority: </span>
      <div className={styles.filterGroup}>
        {priorities.map(p => (
          <button 
            key={p}
            
            className={`${styles.filterBtn} ${activeFilter === p ? styles.active : ''}`} 
            onClick={() => onFilterChange(p)}//لما نضغط على الزر بنستدعي setfilter(p)
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;