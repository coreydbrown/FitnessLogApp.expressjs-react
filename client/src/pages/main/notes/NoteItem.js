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

const NoteItem = ({ id, title, content, category, createdAt, updatedAt }) => {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ fontSize: "1.5rem", bgcolor: theme.palette.primary.main }}
            aria-label="note"
          >
            {category.charAt(0)}
          </Avatar>
        }
        title={title}
        subheader={category}
        subheaderTypographyProps={{ color: theme.palette.primary.main }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <Typography variant="body2" color="primary" sx={{ mt: 2.5 }}>
          {formatDateLong(updatedAt)}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <IconButton aria-label="edit">
          <EditOutlinedIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default NoteItem;
