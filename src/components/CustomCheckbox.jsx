const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="transform scale-150 cursor-pointer" // Збільшує чекбокс
      />
    </div>
  );
};

export default CustomCheckbox;
