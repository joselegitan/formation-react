function Checkbox({ name, label, value, checked, error, onChange }) {
  const insideChange = () => {
    onChange(value)
  }

  return (
    <div className='Input-checkbox'>
      <div className={'Input-aligned'} onClick={insideChange}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          className={'Input-checkbox'}
          onChange={insideChange}
        />
        <p className={'Input-label'}>{label}</p>
      </div>
      {!!error && <p className={'Input-error'}>{error}</p>}
    </div>
  );
}

export default Checkbox;
