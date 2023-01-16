import { useState } from "react";
import { useGetAllNotesQuery } from "../../../app/services/notesApi";

import CreateNote from "./CreateNote";
import SortFilterSearch from "./SortFilterSearch";
import NotesList from "./NotesList";
import LoadingSpinner from "../../../components/LoadingSpinner";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Notes = () => {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");

  const {
    data: notes = [],
    isLoading,
    isSuccess,
  } = useGetAllNotesQuery({ category, sort, search });

  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        NOTES
      </Typography>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <CreateNote />
        <SortFilterSearch
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          search={search}
          setSearch={setSearch}
        />
      </Box>
      {isLoading && <LoadingSpinner />}
      {isSuccess && <NotesList notes={notes} />}
    </>
  );
};

export default Notes;
