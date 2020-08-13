import React from "react";
import PropTypes from "prop-types";
import ModalFormHeader from "../madal-form-header/modal-form-header";
import ModalFormFieldset from "../modal-form-fieldset/modal-form-fieldset";
import ModalFormTable from "../modal-form-table/modal-form-table";
import ModalFormFooter from "../modal-form-footer/modal-form-footer";
import Selector from "../selector/selector";
import Textarea from "../textarea/textarea";
import "./modal-form.scss";

const ModalForm = ({ handleModalClose }) => {
  return (
    <dialog className="modal-form">
      <ModalFormHeader handleModalClose={handleModalClose} />
      <div className="modal-form__content">
        <h2 className="modal-form__content__well-text">41 / Ичединское</h2>
        <ModalFormFieldset legendText="Причина отклонения">
          <Selector />
        </ModalFormFieldset>
        <ModalFormTable />
        <ModalFormFieldset legendText="Мероприятия по возврату снижений">
          <Textarea />
        </ModalFormFieldset>
        <ModalFormFooter />
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
