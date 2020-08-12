import React from "react";
import PropTypes from "prop-types";
import "./selector-container.scss";

const SelectorContainer = () => {
  return (
    <fieldset className="modal-form__content__selector-container">
      <legend>Причина отклонения</legend>
      <select className="modal-form__content__selector-container__selector">
        <option></option>
        <option>2</option>
        <option>3</option>
      </select>
    </fieldset>
  );
};

SelectorContainer.propTypes = {};

SelectorContainer.defaultProps = {};

export default SelectorContainer;
