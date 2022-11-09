import Checkbox from "../Checkbox/Checkbox";
import {FormControl, FormGroup, FormLabel, Typography} from "@mui/material";
import styled from "@emotion/styled";

const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

function CheckboxGroup({ name, label, options, value, className, onChange, error, multiple }) {
  const typedValue = multiple ? (value || []) : value
  const total = multiple ? typedValue.length : 0

  const inOnChange = (checkValue) => {
    if (multiple) {
      const exist = typedValue.includes(checkValue)
      return onChange(exist
        ? typedValue.filter(e => e !== checkValue)
        : [...typedValue, checkValue])
    }
    return onChange(checkValue)
  }

  return (
    <FormControl component="fieldset" className={className}>
      <Label>
        <FormLabel component="legend">{label}</FormLabel>
        {!!total && (
          <Typography variant={'body2'}>
            {`${total} selectionne${total > 1 ? 's' : ''}`}
          </Typography>
        )}
      </Label>
      <FormGroup row>
        {options.map((option) => (
          <Checkbox
            key={option.value}
            value={option.value}
            checked={multiple
              ? typedValue.includes(option.value)
              : option.value === typedValue
            }
            name={name}
            label={option.label}
            onChange={inOnChange}
          />
        ))}
      </FormGroup>
      {!!error && <Typography color={'error'}>{error}</Typography>}
    </FormControl>
  );
}

export default CheckboxGroup;
