// src/components/Home/TodoForm/TodoForm.jsx
import { useForm } from 'react-hook-form';
import styles from './TodoForm.module.css';

const TodoForm = ({ onAdd }) => {
    // نستخدم isValid للتأكد من أن جميع الشروط (الاسم والأولوية) قد تحققت
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
mode: "onTouched",
    reValidateMode: "onChange",
    // criteriaMode: "all",   
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
                    className={`${styles.inputField} ${errors.taskName ? styles.errorInput : ''}`}
                    placeholder="Enter task"
                    {...register("taskName", { 
                        required: "Required", 
                        pattern: {
                            value: /^[A-Za-z\s]+$/, 
                            message: "English only"
                        }
                    })}
                />
                {errors.taskName && <span className={styles.errorText}>{errors.taskName.message}</span>}
            </div>

            <div className={styles.inputGroup}>
                <label>Priority:</label>
                {/* إضافة الـ Validation هنا: required: true تمنع اختيار القيمة الفارغة */}
                <select 
                    className={`${styles.inputField} ${errors.priority ? styles.errorInput : ''}`}
                    {...register("priority", { required: "Select priority" })}
                >
                    <option value="">Select...</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                {errors.priority && <span className={styles.errorText}>Required</span>}
            </div>

            <button 
                type="submit" 
                className={styles.addBtn} 
                disabled={!isValid} // الزر معطل (Disabled) حتى تكتمل كل الحقول
            >
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;