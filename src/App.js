import React, { useState } from "react";
import Portal from "./utils/portal";
import ModalForm from "./components/modal-form/modal-form";

const App = () => {
  const [isOpen, setOpen] = useState(true);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <button className="main-button" onClick={handleModalOpen}>
        Open form
      </button>

      {isOpen ? (
        <Portal>
          <ModalForm handleModalClose={handleModalClose} />
        </Portal>
      ) : null}
    </div>
  );
};

export default App;
