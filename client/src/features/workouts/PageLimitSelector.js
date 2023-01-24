import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PageLimitSelector = ({ limit, setLimit }) => {
  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="page-limit-select-label">Items per page</InputLabel>
      <Select
        labelId="page-limit-select-label"
        id="page-limit-select"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        label="Items per page"
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PageLimitSelector;
