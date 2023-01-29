import { formatDateMedium } from "../../utilities/formatDate";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const columns = [
  {
    field: "exercise",
    headerName: "Exercise",
    flex: 2,
    minWidth: 150,
    maxWidth: 300,
    editable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "weight",
    headerName: "Weight",
    type: "number",
    minWidth: 80,
    maxWidth: 200,
    flex: 1,
    editable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "sets",
    headerName: "Sets",
    type: "number",
    minWidth: 60,
    maxWidth: 200,
    flex: 1,
    editable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "reps",
    headerName: "Reps",
    type: "number",
    minWidth: 60,
    maxWidth: 200,
    flex: 1,
    editable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    valueFormatter: (params) => formatDateMedium(params.value),
    minWidth: 140,
    maxWidth: 300,
    flex: 2,
    editable: false,
    headerAlign: "left",
    align: "left",
  },
];

const RecordsDataGrid = ({ records }) => {
  return (
    <Box width="100%" height="70Vh">
      <DataGrid
        rows={records}
        columns={columns}
        getRowId={(row) => row._id}
        disableColumnMenu
      />
    </Box>
  );
};

export default RecordsDataGrid;
