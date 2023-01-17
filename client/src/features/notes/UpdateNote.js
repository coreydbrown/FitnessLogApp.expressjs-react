import { useState } from "react";
import { useTheme } from "@mui/material";

import UpdateNoteForm from "./UpdateNoteForm";

import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Tooltip from "@mui/material/Tooltip";

const UpdateNote = ({ id, title, content, category }) => {
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
      <Tooltip title="Edit" placement="top">
        <IconButton onClick={handleClickOpen} aria-label="edit">
          <EditOutlinedIcon />
        </IconButton>
      </Tooltip>

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
        <UpdateNoteForm
          id={id}
          title={title}
          content={content}
          category={category}
          handleClose={handleClose}
        />
      </Dialog>
    </>
  );
};

export default UpdateNote;
