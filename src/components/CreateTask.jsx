import { nanoid } from "nanoid";
import { useState } from "react";
import {
  IoIosAddCircleOutline,
  IoIosClose,
  IoMdPricetag,
} from "react-icons/io";
import TagInput from "./TagInput";

const CreateTask = () => {
  const [tags, setTags] = useState([]);
  const [isAddTag, setIsAddTag] = useState(false);

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
    <div className="p-4 bg-neutral-600 rounded-md inline-block w-full max-w-sm">
      <button className="block ml-auto flex-grow-0">
        <IoIosClose size="25" />
      </button>
      <h2 className="font-semibold text-sm mb-2">Create New Card</h2>
      <form>
        <textarea
          name="task"
          className="mb-3 resize-none w-full h-32 rounded-md p-4 text-xs text-black outline-none transition focus:shadow-md focus:shadow-neutral-900"
          placeholder="What is the taks?"
        ></textarea>
        <div className="flex items-start gap-2 pb-4 border-b">
          <IoMdPricetag size="20" />
          {tags.length > 0 && (
            <ul className="flex items-center flex-wrap gap-3">
              {tags.map(({ id, label }) => {
                return (
                  <li
                    key={id}
                    className="p-2 rounded-lg bg-neutral-500 flex items-center gap-1"
                  >
                    <p className="text-xs">{label}</p>
                    <button
                      className="block ml-auto"
                      type="button"
                      onClick={() => onDeleteTag(id)}
                    >
                      <IoIosClose size="20" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

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
        <button className="mt-3 p-2 block w-full rounded-md bg-neutral-500 transition hover:bg-neutral-400">
          Done
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
