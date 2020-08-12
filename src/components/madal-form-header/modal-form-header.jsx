import React from "react";
import PropTypes from "prop-types";
import "./modal-form-header.scss";

const ModalFormHeader = ({ handleModalClose }) => {
  return (
    <div className="modal-form__header">
      <h1 className="modal-form__header__text">
        Согласование изменений параметров работы скважин на 12 августа
      </h1>
      <div className="modal-form__header__button-container">X X</div>
    </div>
  );
};

ModalFormHeader.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
};

ModalFormHeader.defaultProps = {
  handleModalClose: () => {},
};

export default ModalFormHeader;