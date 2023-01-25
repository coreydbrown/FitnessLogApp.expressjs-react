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
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box display="flex">
        <FormControl size="small" sx={{ m: 1 }}>
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

        <FormControl size="small" sx={{ m: 1 }}>
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
      </Box>

      <FormControl sx={{ ml: 1, maxWidth: 180 }}>
        <TextField
          onChange={handleSearchChange}
          id="search"
          label="Search"
          type="search"
          value={search}
          size="small"
        />
      </FormControl>
    </Box>
  );
};

export default SortFilterSearch;
