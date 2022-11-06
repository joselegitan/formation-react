function TextField({ name, label, value, error, onChange }) {
  const insideChange = (e) => onChange(e.target.value)

  return (
    <div className='Input Input-textfield'>
      <div className={'Input-aligned'}>
        <p className={'Input-label'}>{label}</p>
        <input type="text" id={name} name={name} value={value} onChange={insideChange} />
      </div>
      {!!error && <p className={'Input-error'}>{error}</p>}
    </div>
  );
}

export default TextField;
