import { useEffect, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.includes('@');

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    // setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control ';

  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control ';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className='error-text '>Name input no empty !</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className='error-text '>Email input is valid type !</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
