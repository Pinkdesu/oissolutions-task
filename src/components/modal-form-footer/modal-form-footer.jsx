import React from "react";
import PropTypes from "prop-types";
import "./modal-form-footer.scss";

const ModalFormFooter = ({ isValid, disabled, checkValidation, sendData }) => {
  const nowDate = new Date();

  const handleClick = () => {
    if (checkValidation()) {
      sendData();
    }
  };

  return (
    <div className="modal-form__footer">
      <span className="modal-form__footer__text">
        {disabled
          ? `Запрос на согласование отправлен ${nowDate.toLocaleString()}`
          : isValid
          ? null
          : "Не все необходимые поля заполнены!"}
      </span>
      <button
        disabled={disabled}
        onClick={handleClick}
        className="modal-form__footer__button"
      >
        На согласование
      </button>
    </div>
  );
};

ModalFormFooter.propTypes = {
  isValid: PropTypes.bool,
  disabled: PropTypes.bool,
  checkValidation: PropTypes.func,
  sendData: PropTypes.func,
};

ModalFormFooter.defaultProps = {
  isValid: true,
  disabled: false,
  checkValidation: () => {},
  sendData: () => {},
};

export default ModalFormFooter;
