import {forwardRef} from "react";
import {FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect} from "@mui/material";
import styled from "@emotion/styled";

const SelectControl = styled(FormControl)`
  width: max-content;
  min-width: 100px;
`

const Select = forwardRef(({ name, label, value, options = [], error, onChange, className }, ref) => {
  console.log('error', error)
  return (
    <SelectControl>
      <InputLabel id="select-label">{label}</InputLabel>
      <MuiSelect
        ref={ref}
        labelId="select-label"
        id="simple-select"
        value={value}
        label={label}
        onChange={onChange}
        name={name}
        error={!!error}
      >
        {options.map((option, i) => (
          <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
        ))}
      </MuiSelect>
      {!!error && <FormHelperText color={'error'}>{error}</FormHelperText>}
    </SelectControl>
  );
})

export default Select;
