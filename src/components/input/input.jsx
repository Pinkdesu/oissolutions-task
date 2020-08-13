import React from "react";
import PropTypes from "prop-types";

const Input = ({
  value,
  onChange,
  name,
  readOnly,
  disabled,
  tabIndex,
  className,
}) => {
  return (
    <input
      type="number"
      name={name}
      className={className}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      tabIndex={tabIndex}
      onChange={(e) => onChange(e, name)}
    />
  );
};

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  className: PropTypes.string,
};

Input.defaultProps = {
  value: "",
  onChange: () => {},
  readOnly: false,
  disabled: false,
  tabIndex: 0,
  className: "",
};

export default Input;
