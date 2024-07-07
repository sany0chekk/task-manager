import { IoTimerOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

const TaskItem = ({ task }) => {
  return (
    <li className="p-4 rounded-md bg-neutral-800">
      <div className="mb-5 flex items-start gap-4">
        {task.tags.length > 0 && (
          <ul className="flex items-center gap-2">
            {task.tags.map((tag) => {
              return (
                <li key={tag.id} className="p-2 rounded-2xl bg-neutral-600">
                  <p className="text-[10px] text-white uppercase">
                    {tag.label}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
        <button className="ml-auto hover:opacity-50">
          <MdEdit size="20" />
        </button>
      </div>
      <p className="text-sm font-light mb-5">{task.text}</p>
      <div>
        <p className="text-sm opacity-50 flex items-center gap-1">
          <IoTimerOutline size="20" />
          14-03-24
        </p>
      </div>
    </li>
  );
};

export default TaskItem;
