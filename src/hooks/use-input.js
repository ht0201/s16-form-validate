import { useReducer, useState } from 'react';

const initialState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT': {
      return {
        value: action.value,
        isTouched: state.isTouched,
      };
    }
    case 'BLUR': {
      return {
        ...state,
        isTouched: true,
      };
    }

    case 'RESET': {
      return {
        value: '',
        isTouched: false,
      };
    }

    default:
      return initialState;
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(inputState.value);
  const hasError = !enteredValueIsValid && inputState.isTouched;

  const valueInputChangeHandler = (e) => {
    dispatch({ type: 'INPUT', value: e.target.value });
    // setEnteredValue(e.target.value);
  };

  const valueInputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
    // setIsTouched(true);
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
    // setEnteredValue('');
    // setIsTouched(false);
  };

  return {
    value: inputState.value,
    isValid: enteredValueIsValid,
    hasError,
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset,
  };
};
export default useInput;
