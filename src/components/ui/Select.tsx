type SelectProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  disabled?: boolean;
};

const Select = ({
  name,
  value,
  onChange,
  options,
  disabled = false,
}: SelectProps) => {
  return (
    <div className="mb-3">
      <select
        name={name}
        onChange={onChange}
        value={value}
        className="w-full border p-2 rounded outline-none focus:border-emerald-500"
        disabled={disabled}
      >
        <option value="" className="text-gray-500">
          {name}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
