import { useReducer } from "react";

let initialState = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
};



const controlReducer = (state, action) => {
  if (action.type === "1") {
    return {
      1: true,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
    };
  }
  if (action.type === "2") {
    return {
      1: false,
      2: true,
      3: false,
      4: false,
      5: false,
      6: false,
    };
  }
  if (action.type === "3") {
    return {
      1: false,
      2: false,
      3: true,
      4: false,
      5: false,
      6: false,
    };
  }
  if (action.type === "4") {
    return {
      1: false,
      2: false,
      3: false,
      4: true,
      5: false,
      6: false,
    };
  }
  if (action.type === "5") {
    return {
      1: false,
      2: false,
      3: false,
      4: false,
      5: true,
      6: false,
    };
  }
  if (action.type === "6") {
    return {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: true,
    };
  }
  return state;
};

const ButtonStateHelperFunction = () => {

  const [openState, dispatchfn] = useReducer(controlReducer, initialState);
  const handler1 = () => {
    dispatchfn({ type: "1" });
  };
  const handler2 = () => {
    dispatchfn({ type: "2" });
  };
  const handler3 = () => {
    dispatchfn({ type: "3" });
  };
  const handler4 = () => {
    dispatchfn({ type: "4" });
  };
  const handler5 = () => {
    dispatchfn({ type: "5" });
  };
  const handler6 = () => {
    dispatchfn({ type: "6" });
  };
  return {
    buttontotalState: openState,
    handler1,
    handler2,
    handler3,
    handler4,
    handler5,
    handler6,
  };
};

export default ButtonStateHelperFunction;
