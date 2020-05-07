let initState = {
  message: null,
  contactData: [],
  error: false,
  error_message: null,
};

let ContactReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CONTACTMESSAGES":
      return { ...state, message: "Success", contactData: action.payload };
    case "ERROR_CONTACT":
      return { ...state, error: true, error_message: action.payload };
    default:
      return state;
  }
};
export default ContactReducer;
