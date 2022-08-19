import { useReducer } from "react";

const inputIsValidRuducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTounched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return state;
};

const CustomInputIsValidHandler = (validate) => {
  const [inputState, dispatch] = useReducer(inputIsValidRuducer, {
    value: "",
    isTouched: false,
  });
  const inputIsValid = validate(inputState.value);
  const hasError = !inputIsValid && inputState.isTouched;
  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };
  const isTouchedHandler = () => {
    dispatch({ type: "BLUR" });
  };
  const resetHandler = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isvalid:inputIsValid,
    hasError,
    inputChangeHandler,
    isTouchedHandler,
    resetHandler,
  };
};

export default CustomInputIsValidHandler;
