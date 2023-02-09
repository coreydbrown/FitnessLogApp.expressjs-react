import { useGetStatsQuery } from "../app/services/statsApi";
import { useGetAllWeightsQuery } from "../app/services/weightsApi";

import StatsGrid from "../features/stats/StatsGrid";
import LoadingSpinner from "../components/LoadingSpinner";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Stats = () => {
  const {
    data: stats = {},
    isLoading: isLoadingStats,
    isSuccess: isSuccessStats,
  } = useGetStatsQuery();
  const {
    data: weights = [],
    isLoading: isLoadingWeights,
    isSuccess: isSuccessWeights,
  } = useGetAllWeightsQuery();

  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        STATS
      </Typography>
      {(isLoadingStats || isLoadingWeights) && (
        <Box display="flex" justifyContent="center" mt={8}>
          <LoadingSpinner />
        </Box>
      )}
      {isSuccessStats && isSuccessWeights && weights.length > 0 && (
        <StatsGrid stats={stats} weights={weights} />
      )}
    </>
  );
};

export default Stats;
