import React from "react";
import { Bar } from "react-chartjs-2";
import { getStaffSalaryData } from "../data";

const DoubleChartBar = ({ onClickedData, title }) => {
  const ref = React.useRef(null);
  const result = React.useMemo(() => {
    return getStaffSalaryData(title);
  }, [title]);
  return (
    <>
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
              data: result?.data1,
              backgroundColor: ["rgba(153,102,255,0.5)"],
              borderWidth: 1,
              barPercentage: 0.75,
            },
            {
              label: "",
              data: result?.data,
              backgroundColor: ["rgba(255,26,104,0.5)"],
              borderWidth: 1,
              barPercentage: 0.75,
            },
          ],
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 15,
              height: 15,
              backgroundColor: "rgba(153,102,255,0.5)",
            }}
          />
          <p style={{ color: "rgba(153,102,255,0.5)" }} id="description_chart">
            Doanh thu
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            marginTop: 10,
            alignItems: "center",
          }}
          id="description_chart"
        >
          <div
            style={{
              width: 15,
              height: 15,
              backgroundColor: "rgba(255,26,104,0.5)",
            }}
          />
          <p style={{ color: "rgba(255,26,104,0.5)" }}>Lương</p>
        </div>
      </div>
    </>
  );
};

export default DoubleChartBar;
