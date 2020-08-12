import React from "react";
import PropTypes from "prop-types";
import ModalFormHeader from "../madal-form-header/modal-form-header";
import "./modal-form.scss";

const ModalForm = ({ handleModalClose }) => {
  return (
    <dialog className="modal-form">
      <ModalFormHeader handleModalClose={handleModalClose} />
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
