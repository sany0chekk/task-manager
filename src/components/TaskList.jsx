import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggleComplete, onUpdateTaskText }) => {
  return (
    <ul className="flex flex-col gap-2 w-full">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onUpdateTaskText={onUpdateTaskText}
        />
      ))}
    </ul>
  );
};

export default TaskList;
