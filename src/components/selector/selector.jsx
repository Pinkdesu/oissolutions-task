import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Selector = ({ data, focus, value, onChange, disabled, className }) => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (focus) selectRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <select
      ref={selectRef}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={className}
    >
      <option value={0}></option>
      {data.map((item, index) => (
        <option key={index} value={item.id}>
          {item.value}
        </option>
      ))}
    </select>
  );
};

Selector.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    })
  ),
  disabled: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Selector.defaultProps = {
  data: [],
  disabled: false,
  value: 0,
  onChange: () => {},
  className: "",
};

export default Selector;
