const INITIAL_STATE = { text: "Insira um texto..." };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      return { text: action.payload.value };
    case "CLEAR_INPUT":
      return { text: "" };
    default:
      return state;
  }
};
