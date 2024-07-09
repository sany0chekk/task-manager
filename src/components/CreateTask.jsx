import { nanoid } from "nanoid";
import { useState } from "react";
import { IoIosAddCircleOutline, IoMdPricetag } from "react-icons/io";
import TagInput from "./TagInput";
import TagList from "./TagList";

const CreateTask = ({ onAddTask }) => {
  const [tags, setTags] = useState([]);
  const [isAddTag, setIsAddTag] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const task = {
      id: nanoid(),
      tags: tags,
      text: form.task.value.trim(),
      date: form.date.value,
      completed: false,
    };
    onAddTask(task);
    setTags([]);
    setIsAddTag(false);
    form.reset();
  };

  const handleAddTag = (tagName) => {
    const tag = {
      id: nanoid(),
      label: tagName,
    };

    setTags((prevTags) => {
      return [...prevTags, tag];
    });
    setIsAddTag(false);
  };

  const onDeleteTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <div className="p-4 bg-neutral-600 rounded-md inline-block w-full">
      <h2 className="font-semibold text-sm mb-2">Create New Card</h2>
      <form onSubmit={handleAddTask}>
        <textarea
          name="task"
          className="mb-3 resize-none w-full h-32 bg-neutral-500 rounded-md p-4 text-xs text-white placeholder:text-neutral-300 outline-none transition focus:shadow-md focus:shadow-neutral-900"
          placeholder="What is the taks?"
          required
        ></textarea>
        <div className="flex items-start gap-2 pb-4 mb-4 border-b">
          <IoMdPricetag size="20" />
          {tags.length > 0 && <TagList tags={tags} onDeleteTag={onDeleteTag} />}

          {isAddTag ? (
            <TagInput onAddTag={handleAddTag} />
          ) : (
            <button className="ml-auto">
              <IoIosAddCircleOutline
                size="20"
                onClick={() => setIsAddTag(true)}
              />
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="date" className="text-xs ml-auto">
            Time Limit:
          </label>
          <input
            name="date"
            type="date"
            className="text-xs p-2 rounded-md  bg-neutral-500 text-neutral-300"
            required
          />
        </div>
        <button className="mt-3 p-2 block w-full rounded-md bg-neutral-500 transition hover:bg-neutral-400">
          Done
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
