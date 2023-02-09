import { useTheme } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const StatsRecordBox = ({ mostRecentRecord }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundImage: "none",
        border:
          theme.palette.mode === "dark"
            ? `1px solid ${theme.palette.divider}`
            : "none",
      }}
    >
      <CardContent>{mostRecentRecord.exercise}</CardContent>
    </Card>
  );
};

export default StatsRecordBox;
