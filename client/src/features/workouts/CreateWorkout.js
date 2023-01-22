import { useState } from "react";
import { useTheme } from "@mui/material";

import CreateWorkoutFormNew from "./CreateWorkoutFormNew";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

const CreateWorkout = () => {
  const theme = useTheme();

  // Open modal functionality
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        size="large"
        variant="outlined"
        sx={{ mb: 3 }}
      >
        Add a workout
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        PaperProps={{
          style: {
            backgroundColor: theme.palette.background.paper,
            backgroundImage: "none",
          },
        }}
      >
        <CreateWorkoutFormNew handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default CreateWorkout;
