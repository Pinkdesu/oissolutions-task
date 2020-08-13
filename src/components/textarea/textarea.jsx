import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ value, onChange, disabled, className }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={className}
    />
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Textarea.defaultProps = {
  value: "",
  onChange: () => {},
  disabled: false,
  className: "",
};

export default Textarea;
