import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; 
import * as Yup from 'yup';
import styles from './TodoForm.module.css';

const TodoForm = ({ onAdd }) => {
    
    const schema = Yup.object().shape({
        taskName: Yup.string()
            .required("Required, Type task name")
            .matches(/^[A-Za-z\s]+$/, "English only, no numbers or special characters"),
        priority: Yup.string()
            .required("Select priority")
    });

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    mode: "all", 
    resolver: yupResolver(schema),
    defaultValues: {
        taskName: "",
        priority: ""
    }
});

    const onSubmit = (data) => {
        onAdd(data); 
        reset(); 
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputGroup}>
                <label>Task Name:</label>
                <input
                    className={`${styles.inputField} ${errors.taskName && styles.errorInput }`}
                    placeholder="Enter task"
                    {...register("taskName")} 
                />
                {errors.taskName && <span className={styles.errorText}>{errors.taskName.message}</span>}
            </div>

            <div className={styles.inputGroup}>
                <label>Priority:</label>
                <select 
                    className={`${styles.inputField} ${errors.priority && styles.errorInput }`}
                    {...register("priority")} 
                >
                    <option value="">Select...</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                {errors.priority && <span className={styles.errorText}>{errors.priority.message}</span>}
            </div>

            <button 
                type="submit" 
                className={styles.addBtn} 
                disabled={!isValid} 
            >
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;