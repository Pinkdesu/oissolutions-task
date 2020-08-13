import React, { useState, useReducer } from "react";
import PropTypes from "prop-types";
import { ContextApp, initialState, indexReducer } from "../../reducers/index";
import ModalFormHeader from "../madal-form-header/modal-form-header";
import ModalFormFieldset from "../modal-form-fieldset/modal-form-fieldset";
import ModalFormTable from "../modal-form-table/modal-form-table";
import ModalFormFooter from "../modal-form-footer/modal-form-footer";
import Selector from "../selector/selector";
import Textarea from "../textarea/textarea";
import * as initialData from "../../constants";
import "./modal-form.scss";

const ModalForm = ({ handleModalClose }) => {
  const [isFormDisabled, disableForm] = useState(false);
  const [isValid, setValid] = useState(true);
  const [state, dispatch] = useReducer(indexReducer, initialState);
  const { name: fieldName, wellName } = initialData.OIL_FIELD;

  const handleSelectChange = (e) => {
    const currentValue = e.target.value;
    dispatch({
      select: +currentValue,
    });
  };

  const handleTextAreaChange = (e) => {
    const currentValue = e.target.value;
    dispatch({
      textarea: currentValue,
    });
  };

  const checkValidation = () => {
    if (state?.select && state?.input1 && state?.input2) {
      setValid(true);
      return true;
    } else {
      setValid(false);
      return false;
    }
  };

  const sendData = () => {
    disableForm(true);
  };

  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <dialog className="modal-form">
        <ModalFormHeader handleModalClose={handleModalClose} />
        <div className="modal-form__content">
          <h2 className="modal-form__content__well-text">
            {fieldName} / {wellName}
          </h2>
          <ModalFormFieldset legendText="Причина отклонения">
            <Selector
              focus={true}
              data={initialData.REFUSAL_REASONS}
              value={state?.select}
              onChange={handleSelectChange}
              disabled={isFormDisabled}
              className="modal-form__content__fieldset__selector"
            />
          </ModalFormFieldset>
          <ModalFormTable
            data={initialData.TABLE_DATA}
            disabled={isFormDisabled}
          />
          <ModalFormFieldset legendText="Мероприятия по возврату снижений">
            <Textarea
              value={state?.textarea}
              onChange={handleTextAreaChange}
              disabled={isFormDisabled}
              className="modal-form__content__fieldset__textarea"
            />
          </ModalFormFieldset>
          <ModalFormFooter
            isValid={isValid}
            disabled={isFormDisabled}
            checkValidation={checkValidation}
            sendData={sendData}
          />
        </div>
      </dialog>
    </ContextApp.Provider>
  );
};

ModalForm.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
};

ModalForm.defaultProps = {
  handleModalClose: () => {},
};

export default ModalForm;
