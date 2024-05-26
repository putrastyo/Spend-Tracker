type InputProps = {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, placeholder, name, value, onChange }: InputProps) => {
  return (
    <div className={`${name !== "amount" ? "mb-3" : ""} w-full`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border p-2 rounded outline-none focus:border-emerald-500"
      />
    </div>
  );
};

export default Input;
