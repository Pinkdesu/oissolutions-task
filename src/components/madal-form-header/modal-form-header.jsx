import React from "react";
import PropTypes from "prop-types";
import { Xicon, ExpandIcon } from "../../svg/svg-icons";
import "./modal-form-header.scss";

const ModalFormHeader = ({ closeForm, toggleFullScreen }) => {
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
        <ExpandIcon onClick={toggleFullScreen} />
        <Xicon onClick={closeForm} />
      </div>
    </div>
  );
};

ModalFormHeader.propTypes = {
  closeForm: PropTypes.func.isRequired,
};

ModalFormHeader.defaultProps = {
  closeForm: () => {},
};

export default ModalFormHeader;
