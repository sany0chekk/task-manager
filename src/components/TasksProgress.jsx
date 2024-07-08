import { CircularProgressbar } from "react-circular-progressbar";

const TaskProgress = ({ progress }) => {
  return (
    <div className="w-full p-4 bg-neutral-600 rounded-md flex flex-col gap-3 items-center justify-center">
      <h2 className="font-semibold text-lg">Tasks Progress:</h2>
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        className="max-w-32"
      />
    </div>
  );
};

export default TaskProgress;
