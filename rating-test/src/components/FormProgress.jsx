import React from "react";

const FormProgress = ({ currentStep, errors }) => {
  const getClasses = (i) => {
    const getError = (i) => {
      switch (i) {
        case 0:
          return errors.name || errors.info || errors.date || errors.status
            ? "error"
            : null;
        case 1:
          return errors.remarkCategory || errors.remarkDate || errors.remarkInfo
            ? "error"
            : null;
        case 2:
          return errors.name ||
            errors.info ||
            errors.date ||
            errors.status ||
            errors.remarkCategory ||
            errors.remarkDate ||
            errors.remarkInfo
            ? "error"
            : null;
        default:
          return null;
      }
    };
    return `${i === currentStep ? "active" : null} ${getError(i)}`;
  };
  return (
    <ul className="form-progress">
      <li className={getClasses(0)}>Step 1</li>
      <li className={getClasses(1)}>Step 2</li>
      <li className={getClasses(2)}>Step 3</li>
    </ul>
  );
};

export default FormProgress;
