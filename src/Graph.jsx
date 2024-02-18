import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import React from "react";
import { Line } from "react-chartjs-2";
Chart.register(CategoryScale);
function Graph() {
  const ref = React.useRef(null);

  return (
    <Line
      ref={ref}
      options={{
        responsive: true,
        aspectRatio: false,
        scales: {
          y: {
            suggestedMax: 40,
            display: false,
            grid: { color: "transparent" },
            ticks: {
              //autoSkipPadding: 50,
            },
          },
          x: {
            display: false,
            suggestedMax: 10,
            grid: { color: "transparent" },
            ticks: {
              //autoSkipPadding: 50,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      }}
      data={{
        labels: Array.from(Array(30).keys()).map((item) => `${item + 1}`),
        datasets: [
          {
            borderColor: "transparent",
            backgroundColor: "rgba(76, 175, 80,0.5)",
            fill: true,
            data: [0, 0, 0, 5, 15, 4, 15, 5, 10, 0],
            cubicInterpolationMode: "monotone",
          },
          {
            borderColor: "transparent",
            backgroundColor: "rgba(33, 150, 243,0.5)",
            fill: true,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 5, 20, 15, 0],
            cubicInterpolationMode: "monotone",
          },
          {
            borderColor: "transparent",
            backgroundColor: "rgba(0,0,255,0.5)",
            fill: true,
            data: [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 10, 20, 10, 15, 0,
            ],
            cubicInterpolationMode: "monotone",
          },
          {
            borderColor: "transparent",
            backgroundColor: "rgba(158, 158, 158,0.5)",
            fill: true,
            data: [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 8, 5, 15,
              0,
            ],
            cubicInterpolationMode: "monotone",
          },
          {
            borderColor: "transparent",
            backgroundColor: "rgb(97, 97, 97,0.5)",
            fill: true,
            data: [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              15, 10, 20, 10, 15, 0,
            ],
            cubicInterpolationMode: "monotone",
          },
        ],
      }}
    />
  );
}

export default Graph;
