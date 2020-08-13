import React from "react";
import PropTypes from "prop-types";
import { Xicon, ExpandIcon } from "../../svg/svg-icons";
import "./modal-form-header.scss";

const ModalFormHeader = ({ handleModalClose }) => {
  const nowDate = new Date().toLocaleString("ru", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="modal-form__header">
      <h1 className="modal-form__header__text">
        Согласование изменений параметров работы скважин на {nowDate}
      </h1>
      <div className="modal-form__header__button-container">
        <ExpandIcon />
        <Xicon onClick={handleModalClose} />
      </div>
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
