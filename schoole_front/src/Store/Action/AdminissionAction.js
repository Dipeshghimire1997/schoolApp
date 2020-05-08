import axios from "axios";

export const postingAdminissionForm = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3003/api/v/adminission", data)
      .then((result) => {
        // console.log(result.data);
        dispatch({ type: "POST_ADMINISSION", payload: result.data.message });
        getingAdminissionData()(dispatch);
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR_ADMINISSION", payload: err });
      });
  };
};
export const getingAdminissionData = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3003/api/v/adminission")
      .then((result) => {
        // console.table(result.data);
        dispatch({ type: "GET_ADMINISSION", payload: result.data.data });
      })
      .catch((err) => {
        console.log("????", err);
        dispatch({ type: "ERROR_ADMINISSION", payload: err });
      });
  };
};
