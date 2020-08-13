import React from "react";
import PropTypes from "prop-types";
import "./modal-form-footer.scss";

const ModalFormFooter = () => {
  return (
    <div className="modal-form__footer">
      <span className="modal-form__footer__text">
        Запрос на согласование отправлен 08.08.2020 08.54.00
      </span>
      <button className="modal-form__footer__button">На согласование</button>
    </div>
  );
};

ModalFormFooter.propTypes = {};

ModalFormFooter.defaultProps = {};

export default ModalFormFooter;
