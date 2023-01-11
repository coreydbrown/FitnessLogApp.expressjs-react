import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const SuccessAlert = ({ status }) => {
  return (
    <Snackbar
      open={status === "succeeded"}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity="success" variant="filled">
        Success!
      </Alert>
    </Snackbar>
  );
};

export default SuccessAlert;
