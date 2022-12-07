import { useState } from "react";
import useInput from "../../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChanedHandler,
    inputBlurHandler: nameBlurHaldler,
    reset:resetNameInput
  } = useInput((value)=> value.trim() !== '');

  let formISValid = false;

  if (enteredNameIsValid) {
    formISValid = true;
  }

  const onFormSubmission = (event) => {
    event.preventDefault();
  
    if (!enteredNameIsValid) {
      return;
    }
    resetNameInput()
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onFormSubmission}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChanedHandler}
          onBlur={nameBlurHaldler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name Must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formISValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
