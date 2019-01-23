const initialState = {
  b: 1
};
const reducerB = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_B":
      return {
        ...state,
        b: state.b + action.a
      };
    default:
      return state;
  }
};
export default reducerB;
