import { IoIosClose } from "react-icons/io";

const TagList = ({ tags, onDeleteTag }) => {
  const handleDeleteTag = (id) => {
    onDeleteTag(id);
  };

  return (
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
              onClick={() => handleDeleteTag(id)}
            >
              <IoIosClose size="20" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TagList;
