import {TextField as MuiTextField} from "@mui/material";

function TextFieldInput({ name, label, value, error, onChange, className }) {
  const insideChange = (e) => onChange(e.target.value)

  return (
    <MuiTextField
      name={name}
      label={label}
      className={className}
      variant={'outlined'}
      error={!!error}
      helperText={error}
      onChange={insideChange}
      value={value}
    />
  );
}

export default TextFieldInput;
