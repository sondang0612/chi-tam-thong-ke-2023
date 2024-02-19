import React from "react";
import { Pie } from "react-chartjs-2";

const MyPieChart = ({ data, labels }) => {
  return (
    <Pie
      options={{
        responsive: true,
        tooltips: {
          enabled: false,
        },
        plugins: {
          datalabels: {
            align: "end",
            formatter: (value, ctx) => {
              const datapoints = ctx.chart.data.datasets[0].data;
              const total = datapoints.reduce(
                (total, datapoint) => total + datapoint,
                0
              );
              const percentage = (value / total) * 100;
              return percentage.toFixed(0) + "%";
            },
          },
        },
      }}
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: [
              "rgba(255,26,104,0.5)",
              "rgba(54,162,235,0.5)",
              "rgba(255,206,86,0.5)",
              "rgba(75,192,192,0.5)",
              "rgba(153,102,255,0.5)",
              "rgba(0, 0, 255,0.5)",
              "rgba(255, 165, 0,0.5)",
              "rgb(255, 0, 0,0.5)",
              "rgba(60, 60, 60,0.5)",
              "rgba(180, 180, 180,0.5)",
            ],
          },
        ],
      }}
    />
  );
};

export default MyPieChart;
