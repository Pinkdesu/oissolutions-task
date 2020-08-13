import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import "./selector.scss";

const Selector = ({ data }) => {
  const [value, setValue] = useState(0);

  const handleChange = useCallback((e) => {
    const currentValue = e.target.value;
    setValue(currentValue);
  }, []);

  return (
    <select
      value={value}
      onChange={handleChange}
      className="modal-form__content__fieldset__selector"
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
};

Selector.defaultProps = {
  data: [],
};

export default Selector;
