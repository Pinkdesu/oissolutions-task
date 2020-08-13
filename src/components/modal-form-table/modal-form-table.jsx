import React, { useContext } from "react";
import Input from "../input/input";
import { ContextApp } from "../../reducers/index";
import PropTypes from "prop-types";
import "./modal-form-table.scss";

const ModalFormTable = ({ data }) => {
  const { state, dispatch } = useContext(ContextApp);

  const handleInputChange = (event, name) => {
    const currentValue = event.target.value;
    dispatch({
      [name]: currentValue,
    });
  };

  const calculateQ = () => {
    const qJ = state?.input1;
    const waterPercent = state?.input2;

    if (qJ && waterPercent) return (qJ * (1 - waterPercent / 100)).toFixed(4);
    return "";
  };

  return (
    <table className="modal-form__content__table" cols="4">
      <thead>
        <tr>
          {["Параметр", "На согласование", data?.date, "+/-"].map(
            (item, index) => (
              <td key={index}>{item}</td>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {["Qж", "% воды", "Qн", "Нд", "Рлин", "Рбуф", "Рзатр"].map(
          (item, index) => {
            const flag = index === 2;
            const inputName = `input${index + 1}`;
            const inputValue = flag ? calculateQ() : state?.[inputName];
            const oldValue = data?.[inputName];
            const difference = inputValue ? inputValue - oldValue : "";

            return (
              <tr key={index}>
                <td>{item}</td>
                <td className="modal-form__content__table__input-td">
                  <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    name={inputName}
                    readOnly={flag}
                    tabIndex={flag ? -1 : 0}
                    className="modal-form__content__table__input-td__input"
                  />
                </td>
                <td>{oldValue}</td>
                <td>{difference}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

ModalFormTable.propTypes = {
  data: PropTypes.object,
};

ModalFormTable.defaultProps = {
  data: {},
};

export default ModalFormTable;
