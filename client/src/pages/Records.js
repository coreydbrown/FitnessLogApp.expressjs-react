import { useGetRecordsQuery } from "../app/services/recordsApi";

import RecordsDataGrid from "../features/records/RecordsDataGrid";
import LoadingSpinner from "../components/LoadingSpinner";

import Typography from "@mui/material/Typography";

const Records = () => {
  const { data: records = [], isLoading, isSuccess } = useGetRecordsQuery();

  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        RECORDS
      </Typography>
      {isLoading && <LoadingSpinner />}
      {isSuccess && <RecordsDataGrid records={records} />}
    </>
  );
};

export default Records;
