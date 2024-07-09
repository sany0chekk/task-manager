import { IoTimerOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";

const TaskItem = ({ task, onToggleComplete, onUpdateTaskText }) => {
  const [editedText, setEditedText] = useState("");
  const [isEditting, setIsEdditing] = useState(false);

  const handleEdit = () => {
    setEditedText(task.text);
    setIsEdditing(true);
  };

  const handleEditConfirm = () => {
    setIsEdditing(false);
    onUpdateTaskText(task.id, editedText);
  };

  return (
    <li
      className={`p-4 rounded-md bg-neutral-800 flex items-center gap-5 transition-opacity ${
        task.completed ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="transform scale-150 cursor-pointer" // Збільшує чекбокс
        />
      </div>
      <div className="flex-grow">
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
          {isEditting ? (
            <button
              className="ml-auto hover:opacity-50"
              onClick={handleEditConfirm}
            >
              <IoMdDoneAll size="20" />
            </button>
          ) : (
            <button className="ml-auto hover:opacity-50" onClick={handleEdit}>
              <MdEdit size="20" />
            </button>
          )}
        </div>
        {isEditting ? (
          <textarea
            className="p-4 text-xs w-full h-auto bg-neutral-500 resize-none rounded-md outline-none transition-shadow hover:shadow-md"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <p className="text-sm font-light mb-5 whitespace-pre-wrap ">
            {task.text}
          </p>
        )}
        <div>
          <p className="text-sm opacity-50 flex items-center gap-1">
            <IoTimerOutline size="20" />
            {task.date}
          </p>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
