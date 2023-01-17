import { useState } from "react";
import { useTheme } from "@mui/material";

import CreateNoteForm from "./CreateNoteForm";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

const CreateNote = () => {
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
      <Button onClick={handleClickOpen} size="large" variant="outlined">
        Create a new note
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
        <CreateNoteForm handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default CreateNote;
