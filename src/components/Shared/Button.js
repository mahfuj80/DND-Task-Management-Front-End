import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`px-6 py-3 text-sm tracking-wide text-white transition-all bg-gray-800 rounded-full hover:bg-gray-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
