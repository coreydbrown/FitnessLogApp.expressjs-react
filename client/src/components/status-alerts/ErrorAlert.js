import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const ErrorAlert = ({ status, error }) => {
  return (
    <Snackbar
      open={status === "failed"}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity="error" variant="filled">
        {error}
      </Alert>
    </Snackbar>
  );
};

export default ErrorAlert;
