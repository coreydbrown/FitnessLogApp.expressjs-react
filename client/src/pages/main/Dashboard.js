import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Dashboard = () => {
  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        DASHBOARD
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Card>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box>
                <Typography>Hello</Typography>
              </Box>
              <Box>
                <Typography>icon</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card>xs=8</Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card>xs=8</Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card>xs=8</Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>xs=4</Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>xs=4</Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>xs=4</Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>xs=4</Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
