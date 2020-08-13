import React from "react";
import PropTypes from "prop-types";
import "./selector.scss";

const Selector = () => {
  return (
    <select className="modal-form__content__fieldset__selector">
      <option></option>
      <option>2</option>
      <option>3</option>
    </select>
  );
};

Selector.propTypes = {};

Selector.defaultProps = {};

export default Selector;
