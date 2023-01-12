import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const SuccessAlert = ({ severity, error }) => {
  return (
    <Snackbar
      open={true}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={severity} variant="filled">
        {severity === "success" ? "Success!" : error.data.msg}
      </Alert>
    </Snackbar>
  );
};

export default SuccessAlert;
