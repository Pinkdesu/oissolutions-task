import React from "react";
import PropTypes from "prop-types";
import "./modal-form-table.scss";

const ModalFormTable = () => {
  return (
    <table className="modal-form__content__table" cols="4">
      <thead>
        <tr>
          {["Параметр", "На согласование", "08.08.2020", "+/-"].map(
            (item, index) => (
              <td key={index}>{item}</td>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {["Qж", "% воды", "Qн", "Нд", "Рлин", "Рбуф", "Рзатр"].map(
          (item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

ModalFormTable.propTypes = {};

ModalFormTable.defaultProps = {};

export default ModalFormTable;
