const Input = (props) => {
  const { type = 'text', name, label, classes, error, ...rest } = props;
  return (
    <div className={classes ? `form-group ${classes}` : 'form-group'}>
      {label && <label htmlFor={name}>{label}</label>}
      {type === 'textarea' ? (
        <textarea className="form-control" id={name} name={name} {...rest} />
      ) : (
        <input
          type={type}
          className={error ? 'form-control is-invalid' : 'form-control'}
          id={name}
          name={name}
          {...rest}
        />
      )}
    </div>
  );
};

export default Input;
