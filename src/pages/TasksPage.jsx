import { useState } from "react";
import CreateTask from "../components/CreateTask";
import TaskList from "../components/TaskList";
import TaskProgress from "../components/TasksProgress";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleUpdateTaskText = (taskId, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const completetPercetage =
    tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  return (
    <div className="flex items-start gap-5 flex-col md:flex-row">
      <div className="flex flex-col gap-5 w-full md:max-w-sm flex-shrink-0">
        <CreateTask onAddTask={handleAddTask} />
        <TaskProgress progress={completetPercetage} />
      </div>
      <TaskList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onUpdateTaskText={handleUpdateTaskText}
      />
    </div>
  );
};

export default TasksPage;
