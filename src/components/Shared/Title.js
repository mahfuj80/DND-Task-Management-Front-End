import React from "react";

const Title = ({ children, className }) => {
  return (
    <h3 className={`text-white md:text-5xl text-4xl font-bold ${className}`}>
      {children}
    </h3>
  );
};

export default Title;
