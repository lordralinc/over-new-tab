import Input from "./input";

type InputFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const InputField = ({ id, label, value, onChange }: InputFieldProps) => {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <label htmlFor={id} style={{ display: "block", marginBottom: "0.5rem" }}>
        {label}
      </label>
      <Input
        id={id}
        type="text"
        className="w100"
        value={value}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
      />
    </div>
  );
};

export default InputField;
