import { useGetAllNotesQuery } from "../../../services/apiSlice";

import CreateNote from "./CreateNote";
import NotesList from "./NotesList";
import LoadingSpinner from "../../../components/LoadingSpinner";

import Typography from "@mui/material/Typography";

const Notes = () => {
  const { data: notes = [], isLoading, isSuccess } = useGetAllNotesQuery();

  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        NOTES
      </Typography>
      <CreateNote />
      {isLoading && <LoadingSpinner />}
      {isSuccess && <NotesList notes={notes} />}
    </>
  );
};

export default Notes;
