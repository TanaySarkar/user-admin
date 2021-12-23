import './index.css';

const ToggleSwitch = ({ name, ...rest }) => {
  return (
    <div className="switch">
      <input
        type="checkbox"
        name={name}
        id={name}
        className="switch-input"
        {...rest}
      />
      <label htmlFor={name} />
    </div>
  );
};

export default ToggleSwitch;
