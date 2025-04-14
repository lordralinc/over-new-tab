import Select from "./select";

type InputFieldProps = {
  id: string;
  label: string;
  value: string;
  options: { value: string; name: string }[];
  onChange: (value: string) => void;
};

const SelectField = ({
  id,
  label,
  value,
  options,
  onChange,
}: InputFieldProps) => {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <label htmlFor={id} style={{ display: "block", marginBottom: "0.5rem" }}>
        {label}
      </label>
      <Select
        id={id}
        className="w100"
        value={value}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
      >
        {options.map((it) => (
          <option value={it.value}>{it.name}</option>
        ))}
      </Select>
    </div>
  );
};

export default SelectField;
