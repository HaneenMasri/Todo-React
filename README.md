# React Task: To-Do List App

## Objective
Build a simple React To-Do List app to practice:

- `useState`
- Dynamic rendering
- Conditional rendering
- Two-way binding
- Form validation with React Hook Form

---

## Features & Requirements

1. **Add To-Do Items**
- Input fields for:
  - Task Name (text)
  - Task Priority (dropdown: High, Medium, Low)
- Add Task button to submit a new task.

2. **Two-Way Binding**
- Input fields connected to state using `useState`.

3. **Display Tasks Dynamically**
- Render a list of tasks below the form.
- Each task shows:
  - Task name
  - Priority
  - A "Done" button

4. **Conditional Rendering**
- Show `'No tasks yet!'` if no tasks exist.
- Strike-through task name if completed.
- Filter tasks by selected priority (All / High / Medium / Low).

5. **Priority Color Indicator**
- High → Red
- Medium → Yellow
- Low → Green

6. **Task Actions**
- Delete task button
- Inline editing of task name

7. **Form Validation (React Hook Form)**
- Task Name: English letters and spaces only, required
- Priority: required
- Submit button: disabled until all validations pass

---

## Components

### `TodoForm`
- Props: `onAdd(task)`
- Form with validation using `react-hook-form`

### `TodoItem`
- Props: `task`, `onDelete(id)`, `onToggle(id)`, `onUpdate(id, taskName)`

### `FilterBar`
- Props: `activeFilter`, `onFilterChange(filter)`

---

## File Structure

my-react-app/
│
├─ src/
│ ├─ components/
│ │ ├─ Home/
│ │ │ ├─ FilterBar/
│ │ │ ├─ TodoForm/
│ │ │ └─ TodoItem/
│ ├─ pages/
│ │ └─ Home/
│ ├─ App.jsx
│ ├─ App.css
│ └─ main.jsx
├─ public/
├─ node_modules/
├─ package.json
└─ .gitignore
