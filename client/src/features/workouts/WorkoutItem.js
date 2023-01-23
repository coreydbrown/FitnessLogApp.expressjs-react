import { useTheme } from "@mui/material";
import { formatDateMedium, dayOfMonth } from "../../utilities/formatDate";
import ExerciseRow from "./ExerciseRow";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

const WorkoutItem = ({ exercises, createdAt }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: 350,
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
            sx={{ bgcolor: theme.palette.green.main }}
            aria-label="workout"
          >
            {dayOfMonth(createdAt)}
          </Avatar>
        }
        title={formatDateMedium(createdAt)}
        sx={{ pb: 0.5 }}
      />
      <CardContent>
        {exercises.map((exercise) => (
          <ExerciseRow
            key={exercise._id}
            exercise={exercise.exercise}
            weight={exercise.weight}
            sets={exercise.sets}
            reps={exercise.reps}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default WorkoutItem;
