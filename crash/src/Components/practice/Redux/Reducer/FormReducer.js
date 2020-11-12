import { add_Forms, ADD_FORMS } from "../Action/FormAction";

const initialState = {
  forms: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORMS:
      console.log(action.payload, "payload");
      return {
        ...state,
        forms: [...state.forms, action.payload],
      };

    default:
      return state;
  }
};
