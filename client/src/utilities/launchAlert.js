import { displayAlert, hideAlert } from "../services/alertSlice";

const launchAlert = (dispatch, error) => {
  if (error) {
    dispatch(displayAlert({ status: "error", message: error.data.msg }));
  } else {
    dispatch(displayAlert({ status: "success", message: "Success!" }));
  }
  setTimeout(() => {
    dispatch(hideAlert());
  }, "5000");
};

export default launchAlert;
