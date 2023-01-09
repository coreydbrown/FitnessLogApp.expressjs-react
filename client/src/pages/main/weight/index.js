import AddWeight from "./AddWeight";
import WeightTable from "./WeightTable";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Weight = () => {
  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        WEIGHT
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <AddWeight />

        <WeightTable />
      </Box>
    </>
  );
};

export default Weight;
