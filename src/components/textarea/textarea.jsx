import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ className }) => {
  return <textarea className={className} />;
};

Textarea.propTypes = {
  className: PropTypes.string,
};

Textarea.defaultProps = {
  className: "",
};

export default Textarea;
