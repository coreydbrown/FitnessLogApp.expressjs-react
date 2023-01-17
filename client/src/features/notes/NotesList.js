import NoteItem from "./NoteItem";

import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";

const NotesList = ({ notes }) => {
  return (
    <Box marginRight={-3}>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        spacing={3}
        sx={{ alignContent: "center" }}
      >
        {notes.map((note) => (
          <NoteItem
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            category={note.category}
            createdAt={note.createdAt}
            updatedAt={note.updatedAt}
          />
        ))}
      </Masonry>
    </Box>
  );
};

export default NotesList;
