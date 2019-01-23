import { bindActionCreators } from "../../../../../AppData/Local/Microsoft/TypeScript/3.2/node_modules/redux";

const initialState = {
  a: 1,
  b: 2
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_A":
      return {
        ...state,
        a: state.a + state.b
      };
      break;
    case "UPDATE_B":
      return {
        ...state,
        b: state.a + state.b
      };
      break;
    default:
      return state;
  }
};
export default reducer;
