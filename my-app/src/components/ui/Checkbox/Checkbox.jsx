import {FormControl, InputLabel, Checkbox as MuiCheckbox, FormControlLabel} from "@mui/material";

function Checkbox({ name, label, value, checked, onChange, className }) {
  const insideChange = (e) => {
    onChange(value)
  }

  return (
    <FormControlLabel
      name={name}
      checked={checked}
      control={<MuiCheckbox />}
      label={label}
      labelPlacement="end"
      className={className}
      onChange={insideChange}
    />
  );
}

export default Checkbox;
