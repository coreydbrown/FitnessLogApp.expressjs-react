import CreateNote from "./CreateNote";
import NotesList from "./NotesList";

import Typography from "@mui/material/Typography";

const Notes = () => {
  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        NOTES
      </Typography>
      <CreateNote />
      <NotesList />
    </>
  );
};

export default Notes;
