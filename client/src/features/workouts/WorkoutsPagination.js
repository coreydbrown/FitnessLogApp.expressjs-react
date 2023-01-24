import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const WorkoutsPagination = ({ page, setPage, numOfPages }) => {
  const handlePageChange = (e, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Stack spacing={2}>
        <Pagination
          count={numOfPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default WorkoutsPagination;
