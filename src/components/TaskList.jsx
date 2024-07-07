import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <ul className="flex flex-col gap-2 w-full">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
