import React from "react";
import PropTypes from "prop-types";
import ModalFormHeader from "../madal-form-header/modal-form-header";
import SelectContainer from "../select-container/selector-container";
import "./modal-form.scss";

const ModalForm = ({ handleModalClose }) => {
  return (
    <dialog className="modal-form">
      <ModalFormHeader handleModalClose={handleModalClose} />
      <div className="modal-form__content">
        <h2 className="modal-form__content__well-text">41 / Ичединское</h2>
        <SelectContainer />
      </div>
    </dialog>
  );
};

ModalForm.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
};

ModalForm.defaultProps = {
  handleModalClose: () => {},
};

export default ModalForm;
