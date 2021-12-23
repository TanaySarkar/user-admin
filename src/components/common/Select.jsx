const Select = ({ name, label, classes, error, options, val, ...rest }) => {
  return (
    <div className={classes ? `form-group ${classes}` : 'form-group'}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className={error ? 'form-select is-invalid' : 'form-select'}
        id={name}
        name={name}
        {...rest}
        value={val}
      >
        <option />
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Select;
