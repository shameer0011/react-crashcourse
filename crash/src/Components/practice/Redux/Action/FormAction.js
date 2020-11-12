export const ADD_FORMS = "ADD_FORMS";
export const GET_FORMS = "GET_FORMS";
export const UPDATE_FORMS = "UPDATE_FORMS";
export const DELETE_FORMS = "DELETE_FORMS";

export const add_Forms = (forms_values) => {
  return {
    type: ADD_FORMS,
    payload: forms_values,
  };
};

export const delete_Forms = (id) => {
  return {
    type: DELETE_FORMS,
    payload: id,
  };
};
