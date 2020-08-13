import React from "react";
import PropTypes from "prop-types";
import "./modal-form-fieldset.scss";

const ModalFormFieldset = ({ children, legendText }) => {
  return (
    <fieldset className="modal-form__content__fieldset">
      <legend>{legendText}</legend>
      {children}
    </fieldset>
  );
};

ModalFormFieldset.propTypes = {
  children: PropTypes.element,
  legendText: PropTypes.string,
};

ModalFormFieldset.defaultProps = {
  legendText: "",
};

export default ModalFormFieldset;
