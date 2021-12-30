const Select = (props) => {
  const { name, label, options, placeholder, classes, error, ...rest } = props;

  return (
    <div className={classes ? `form-group ${classes}` : 'form-group'}>
      <label htmlFor={name} className="form-label">
        {label} {props.required && <span className="text-danger">*</span>}
      </label>
      <select
        className={error ? 'form-select is-invalid' : 'form-select'}
        id={name}
        name={name}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
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
