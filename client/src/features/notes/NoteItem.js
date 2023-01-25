import { formatDateLong } from "../../utilities/formatDate";
import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material";
import { useDeleteNoteMutation } from "../../app/services/notesApi";
import launchAlert from "../../utilities/launchAlert";

import UpdateNote from "./UpdateNote";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Tooltip from "@mui/material/Tooltip";

const NoteItem = ({ id, title, content, category, updatedAt }) => {
  const dispatch = useDispatch();

  const [deleteNote] = useDeleteNoteMutation();

  const theme = useTheme();

  let noteColor;
  if (category === "goal") noteColor = theme.palette.green.main;
  if (category === "reminder") noteColor = theme.palette.pink.main;
  if (category === "workout-thought") noteColor = theme.palette.orange.main;
  if (category === "other") noteColor = theme.palette.purple.main;

  let categoryReformatted = category;
  if (category === "workout-thought") categoryReformatted = "workout thought";

  const handleDelete = () => {
    deleteNote(id).then(({ error }) => launchAlert(dispatch, error));
  };

  return (
    <Card
      sx={{
        width: "100%",
        backgroundImage: "none",
        border:
          theme.palette.mode === "dark"
            ? `1px solid ${theme.palette.divider}`
            : "none",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ fontSize: "1.5rem", bgcolor: noteColor }}
            aria-label="note"
          >
            {category.charAt(0)}
          </Avatar>
        }
        title={title}
        subheader={categoryReformatted}
        subheaderTypographyProps={{ color: noteColor }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <Typography variant="body2" color={noteColor} sx={{ mt: 2.5 }}>
          {formatDateLong(updatedAt)}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "end" }}
      >
        <UpdateNote
          id={id}
          title={title}
          content={content}
          category={category}
        />
        <Tooltip title="Remove" placement="top">
          <IconButton onClick={handleDelete} aria-label="delete">
            <DeleteOutlinedIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default NoteItem;
