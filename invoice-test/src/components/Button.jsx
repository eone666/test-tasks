import React from "react";

export default function Button({ children, modificator, ...rest }) {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
}
