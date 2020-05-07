import axios from "axios";
export let postContactMsg = (data) => {
  return (dispatch) => {
    console.table(data);
    axios
      .post("http://localhost:3003/api/v/feedback", data)
      .then((result) => {
        console.log(result.data);
        getContactMsg();
      })
      .catch((err) => {
        dispatch({ type: "ERROR_CONTACT" });
        console.log(err);
      });
  };
};
export let getContactMsg = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3003/api/v/feedback")
      .then((result) => {
        console.log(result);
        dispatch({ type: "GET_CONTACTMESSAGES", payload: result.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR_CONTACT" });
      });
  };
};
