import React from "react";
import { Line } from "react-chartjs-2";
import revenue12Months2023 from "../data/revenue/2023.json";
import revenue12Months2022 from "../data/revenue/2022.json";

const Revenue12Months = ({ title }) => {
  const ref = React.useRef(null);
  const data2023 = React.useMemo(() => {
    let sum = 0;
    let revenues = revenue12Months2023.map((item) => {
      if (title === "Tổng tiền đã thu") {
        sum += item.totalRevenue;
        return item.totalRevenue;
      } else {
        sum += item.countOrders;

        return item.countOrders;
      }
    });
    return { sum, revenues };
  }, [title]);

  const data2022 = React.useMemo(() => {
    let sum = 0;
    let revenues = revenue12Months2022.map((item) => {
      if (title === "Tổng tiền đã thu") {
        sum += item.totalRevenue;
        return item.totalRevenue;
      } else {
        sum += item.countOrders;

        return item.countOrders;
      }
    });
    return { sum, revenues };
  }, [title]);

  return (
    <>
      <Line
        ref={ref}
        options={{
          responsive: true,
          aspectRatio: false,
          scales: {
            y: { grid: { color: "transparent" } },
            x: {
              suggestedMax: 10,
              grid: { color: "transparent" },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: Array.from(Array(12).keys()).map(
            (item) => `Tháng ${item + 1}`
          ),
          datasets: [
            {
              fill: true,
              data: data2023.revenues,
              backgroundColor: "rgba(255,206,86,0.5)",
              cubicInterpolationMode: "monotone",
              label: "2023",
            },
            {
              fill: true,
              data: data2022.revenues,
              cubicInterpolationMode: "monotone",
              backgroundColor: "rgba(54,162,235,0.5)",
              label: "2022",
            },
          ],
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
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
              backgroundColor: "rgb(54,162,235)",
            }}
          />
          <p style={{ color: "rgb(54,162,235)" }} id="description_chart">
            Năm 2022: Tổng&nbsp;
            {title === "Tổng tiền đã thu"
              ? new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(data2022?.sum || 0)
              : `${data2022.sum} đơn`}
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
              backgroundColor: "rgb(255,206,86)",
            }}
          />
          <p style={{ color: "rgb(255,206,86)" }}>
            Năm 2023: Tổng&nbsp;
            {title === "Tổng tiền đã thu"
              ? new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(data2023?.sum || 0)
              : `${data2023.sum} đơn`}
          </p>
        </div>
      </div>
    </>
  );
};

export default Revenue12Months;
