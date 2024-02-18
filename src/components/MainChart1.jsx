import React from "react";
import { Bar } from "react-chartjs-2";
import { getStaffsData } from "../data";

const MainChart1 = ({ title, title1, onClickedData }) => {
  const ref = React.useRef(null);
  const result = React.useMemo(() => {
    return getStaffsData(title, title1);
  }, [title, title1]);
  return (
    <Bar
      ref={ref}
      options={{
        responsive: true,
        aspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        onClick: (e) => {
          const points = ref.current.getElementsAtEventForMode(
            e,
            "nearest",
            { intersect: true },
            true
          );
          if (points[0]) {
            const index = points[0].index;
            onClickedData(index, {
              count: result.data[index],
              revenue: result.commissions[index],
              text: result.labels[index].split("(")[0],
              serviceName: result.labels[index]
                .split("(")[1]
                .slice(0, result.labels[index].split("(")[1].length - 1),
            });
          }
        },
        scales: {
          x: {
            ticks: {
              callback: function (val, index) {
                // Hide the label of every 2nd dataset
                return this.getLabelForValue(val).length <= 10
                  ? this.getLabelForValue(val)
                  : `${this.getLabelForValue(val).slice(0, 10)}...`;
              },
            },
            grid: { color: "transparent" },
          },
        },
      }}
      data={{
        labels: result?.labels,
        datasets: [
          {
            label: "",
            data: result?.data,
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
            borderWidth: 1,
            barPercentage: 0.75,
          },
        ],
      }}
    />
  );
};

export default MainChart1;
