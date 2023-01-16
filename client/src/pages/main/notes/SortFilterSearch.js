import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const SortFilterSearch = ({
  category,
  setCategory,
  sort,
  setSort,
  search,
  setSearch,
}) => {
  const handleFilterChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Box display="flex" alignItems="center">
      <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="filter-select-label">Filter</InputLabel>
        <Select
          labelId="filter-select-label"
          id="filter-select"
          value={category}
          onChange={handleFilterChange}
          label="Filter"
        >
          <MenuItem value="all">
            <em>None</em>
          </MenuItem>
          <MenuItem value="goal">Goals</MenuItem>
          <MenuItem value="reminder">Reminders</MenuItem>
          <MenuItem value="workout-thought">Workout Thoughts</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="sort-select-label">Sort</InputLabel>
        <Select
          labelId="sort-select-label"
          id="sort-select"
          value={sort}
          onChange={handleSortChange}
          label="Sort"
        >
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <TextField
          onChange={handleSearchChange}
          id="search"
          label="search"
          type="search"
          size="small"
          sx={{ minWidth: 120, ml: 1 }}
        />
      </FormControl>
    </Box>
  );
};

export default SortFilterSearch;
