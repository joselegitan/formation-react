import {forwardRef} from "react";

const Select = forwardRef(({ name, label, value, options = [], error, onChange, className }, ref) => {
  return (
    <div className={`Input ${className}`}>
      <div className={'Input-aligned'}>
        <p className={'Input-label'}>{label}:</p>
        <select
          ref={ref}
          name={name}
          id={name}
          onChange={onChange}
          value={value}
          className={'Input-select'}
        >
          {options.map((option, i) => (
            <option key={i} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      {!!error && <p className={'Input-error'}>{error}</p>}
    </div>
  );
})

export default Select;
