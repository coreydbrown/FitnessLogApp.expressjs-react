import { useSelector } from "react-redux";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const ApiAlert = () => {
  const status = useSelector((state) => state.alert.alertStatus);
  const message = useSelector((state) => state.alert.alertMessage);

  return (
    <Snackbar
      open={true}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={status} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ApiAlert;
