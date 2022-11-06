import Checkbox from "../Checkbox/Checkbox";

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
    <div className={`Input ${className}`}>
      <div className="line">
        <p className={'Input-label'}>{label}</p>
        <div className={'Input-aligned'}>
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
        </div>
      </div>
      {!!total && (
        <p>
          <b>{`${total} selectionne${total > 1 ? 's' : ''}`}</b>
        </p>
      )}
      {!!error && <p className={'Input-error'}>{error}</p>}
    </div>
  );
}

export default CheckboxGroup;
