import { formatDateLong } from "../../../utilities/formatDate";
import { useTheme } from "@mui/material";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Tooltip from "@mui/material/Tooltip";

const NoteItem = ({ id, title, content, category, createdAt, updatedAt }) => {
  const theme = useTheme();

  let noteColor;
  if (category === "Goal") noteColor = theme.palette.green.main;
  if (category === "Reminder") noteColor = theme.palette.pink.main;
  if (category === "Workout Thought") noteColor = theme.palette.orange.main;
  if (category === "Other") noteColor = theme.palette.purple.main;

  return (
    <Card
      sx={{
        maxWidth: 300,
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
        subheader={category}
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
        <Tooltip title="Edit" placement="top">
          <IconButton aria-label="edit">
            <EditOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove" placement="top">
          <IconButton aria-label="delete">
            <DeleteOutlinedIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default NoteItem;
