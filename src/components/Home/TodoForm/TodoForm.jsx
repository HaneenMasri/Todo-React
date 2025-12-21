import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './TodoForm.module.css';

const TodoForm = ({ onAdd }) => {
  // استخدام mode: "onBlur" ليظهر الخطأ عند ترك الحقل
  // استخدام reValidateMode: "onChange" ليتفعل الزر فور تصحيح الخطأ
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
mode: "onChange"  });

  const onSubmit = (data) => {
    // إرسال البيانات للصفحة الرئيسية وتفريغ الفورم
    onAdd({ name: data.taskName, priority: data.priority });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div className={styles.inputWrapper}>
        
        {/* حقل اسم المهمة */}
        <div className={styles.fieldGroup}>
          <label>Task Name:</label>
          <input
            {...register("taskName", {
              required: "Task Name is required", // شرط الحقل مطلوب
              pattern: {
                value: /^[A-Za-z\s]+$/, // أحرف إنجليزية ومسافات فقط
                message: "English characters only with spaces"
              }
            })}
            placeholder="Enter task"
            className={errors.taskName ? styles.inputError : ""}
          />
          {errors.taskName && <span className={styles.errorMessage}>{errors.taskName.message}</span>}
        </div>

        {/* حقل الأولوية */}
        <div className={styles.fieldGroup}>
          <label>Priority:</label>
          <select
            {...register("priority", { required: "Priority is required" })}
            className={errors.priority ? styles.inputError : ""}
          >
            <option value="">Select...</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {errors.priority && <span className={styles.errorMessage}>{errors.priority.message}</span>}
        </div>

        {/* زر الإضافة - مرتبط بحالة isValid لضمان التعطيل الصحيح */}
        <button 
          type="submit" 
          className={styles.addBtn} 
          disabled={!isValid} 
        >
          Add Task
        </button>

      </div>
    </form>
  );
};

export default TodoForm;