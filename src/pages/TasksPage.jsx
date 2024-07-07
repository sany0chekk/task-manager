import { useState } from "react";
import CreateTask from "../components/CreateTask";
import TaskList from "../components/TaskList";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };

  return (
    <div className="flex items-start gap-5 flex-col md:flex-row">
      <CreateTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TasksPage;
