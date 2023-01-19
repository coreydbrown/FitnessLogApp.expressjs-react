import { ResponsiveLine } from "@nivo/line";
import { useTheme, useMediaQuery } from "@mui/material";
import moment from "moment";
import randomColorGenerator from "../../utilities/randomColorGenerator";

import Box from "@mui/material/Box";

const WeightChart = ({ weights }) => {
  const theme = useTheme();
  const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
  const smallToMid = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));
  let height = 600;
  if (useMediaQuery(theme.breakpoints.down("lg"))) height = 500;
  if (useMediaQuery(theme.breakpoints.down("md"))) height = 400;

  const data = [
    {
      id: "weight",
      data: weights.map((weight) => {
        return {
          x: moment(weight.createdAt).format("M-D-YYYY"),
          y: weight.weight,
        };
      }),
    },
  ];

  const muiTheme = useTheme();

  const nivoTheme = {
    background: muiTheme.palette.background.default,
    axis: {
      legend: {
        text: {
          fontSize: muiTheme.typography.fontSize,
          fill: muiTheme.palette.text.primary,
        },
      },
      ticks: {
        line: {
          stroke: muiTheme.palette.divider,
          strokeWidth: 1,
        },
        text: {
          fontSize: muiTheme.typography.fontSize,
          fill: muiTheme.palette.text.secondary,
        },
      },
    },
    grid: {
      line: {
        stroke: muiTheme.palette.divider,
        strokeWidth: 1,
      },
    },
    tooltip: {
      container: {
        background: muiTheme.palette.background.paper,
        color: muiTheme.palette.text.primary,
        fontSize: muiTheme.typography.fontSize,
      },
    },
    crosshair: {
      line: {
        stroke: muiTheme.palette.text.primary,
      },
    },
  };

  return (
    <Box height={height}>
      <ResponsiveLine
        data={data}
        theme={nivoTheme}
        margin={{ top: 50, right: 50, bottom: 70, left: 80 }}
        xScale={{
          type: "time",
          format: "%m-%d-%Y",
          precision: "day",
          useUTC: false,
        }}
        xFormat="time:%m-%d-%Y"
        yScale={{ type: "linear", min: "auto", max: "auto" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          format: "%m/%d",
          legend: "Date",
          legendOffset: 45,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          legend: "Weight",
          legendOffset: -60,
          legendPosition: "middle",
        }}
        tooltip={({ point }) => (
          <Box
            bgcolor={muiTheme.palette.background.paper}
            p={1}
            borderRadius={muiTheme.shape.borderRadius}
          >
            <div>Date: {point.data.xFormatted}</div>
            <div>Weight: {point.data.yFormatted}</div>
          </Box>
        )}
        colors={[randomColorGenerator(muiTheme)]}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
      />
    </Box>
  );
};

export default WeightChart;
