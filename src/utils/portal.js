import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const el = document.createElement("div");
  el.className = "background-wrapper";

  useEffect(() => {
    document.body.appendChild(el);
    document.body.classList.add("is-modal");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      document.body.removeChild(el);
      document.body.classList.remove("is-modal");
    };
  });

  return createPortal(children, el);
};

export default Portal;
