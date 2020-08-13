import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

const Selector = ({ data, className }) => {
  const [value, setValue] = useState(0);

  const handleChange = useCallback((e) => {
    const currentValue = e.target.value;
    setValue(currentValue);
  }, []);

  return (
    <select value={value} onChange={handleChange} className={className}>
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
  className: PropTypes.string,
};

Selector.defaultProps = {
  data: [],
  className: "",
};

export default Selector;
