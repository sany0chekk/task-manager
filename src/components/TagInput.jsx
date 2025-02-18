import { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";

const TagInput = ({ onAddTag }) => {
  const [tagName, setTagName] = useState("");

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagName.trim()) {
      onAddTag(tagName.trim());
      setTagName("");
    }
  };

  return (
    <div className="ml-auto p-2  flex items-center gap-2 bg-neutral-500 rounded-lg">
      <input
        type="text"
        value={tagName}
        placeholder="Tag name"
        className="bg-transparent text-xs text-white placeholder:text-neutral-300 outline-none"
        onChange={(e) => {
          setTagName(e.target.value);
        }}
      />
      <button
        onClick={handleAddTag}
        className="transition-opacity hover:opacity-50"
      >
        <IoMdDoneAll />
      </button>
    </div>
  );
};

export default TagInput;
