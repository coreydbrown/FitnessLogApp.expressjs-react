import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";

const ExerciseRow = ({ exercise, sets, reps, bgColor, textColor }) => {
  const theme = useTheme();

  return (
    <Box display="flex" mb={1}>
      <Box
        flexGrow={1}
        borderRadius="5px 0 0 5px"
        border={2}
        borderRight={1}
        borderColor={theme.palette.indigo.dark}
        pl={1}
        pr={1}
      >
        {exercise}
      </Box>
      <Box
        border={2}
        borderLeft={1}
        borderRight={1}
        borderColor={theme.palette.red.dark}
        pl={1}
        pr={1}
      >
        {`${sets} sets`}
      </Box>
      <Box
        borderRadius="0 5px 5px 0"
        border={2}
        borderLeft={1}
        borderColor={theme.palette.purple.dark}
        pl={1}
        pr={1}
      >
        {`${reps} reps`}
      </Box>
    </Box>
  );
};

export default ExerciseRow;
