import React from "react";

const Description = ({ children, className }) => {
  return (
    <p className={`mt-6 text-sm text-gray-300 ${className}`}>{children}</p>
  );
};

export default Description;
