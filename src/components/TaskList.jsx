import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggleComplete }) => {
  return (
    <ul className="flex flex-col gap-2 w-full">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
