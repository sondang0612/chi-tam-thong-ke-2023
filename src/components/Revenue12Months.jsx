import React from "react";
import { Pie } from "react-chartjs-2";
import phanloai2023 from "../data/revenue/phanloai2023.json";
import phanloai2024 from "../data/revenue/phanloai2024.json";
import MyPieChart from "./MyPieChart";

const Revenue12Months = ({ title }) => {
  const dataPhanloai2023 = React.useMemo(() => {
    const labels = [];
    const counts = [];
    let sum = 0;

    phanloai2023.forEach((item) => {
      labels.push(item.name);
      counts.push(item.total);
      sum += item.total;
    });
    return { labels, counts, sum };
  }, []);

  const dataPhanloai2024 = React.useMemo(() => {
    const labels = [];
    const counts = [];
    let sum = 0;

    phanloai2024.forEach((item) => {
      labels.push(item.name);
      counts.push(item.total);
      sum += item.total;
    });
    return { labels, counts, sum };
  }, []);

  return (
    <>
      <p
        style={{
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
          paddingBottom: 20,
        }}
      >
        Thống kê Doanh thu
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "30vw", textAlign: "center" }}>
            <MyPieChart
              labels={dataPhanloai2023.labels}
              data={dataPhanloai2023.counts}
            />
            <div style={{ marginTop: 5 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Năm 2023:&nbsp;
                <span style={{ fontWeight: 700, fontSize: 18 }}>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(dataPhanloai2023.sum || 0)}
                </span>
              </div>
              <p style={{ fontSize: 14, color: "gray" }}>
                (01/01/2023 - 31/12/2023)
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "30vw", textAlign: "center" }}>
            <MyPieChart
              labels={dataPhanloai2024.labels}
              data={dataPhanloai2024.counts}
            />
            <div style={{ marginTop: 5 }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Năm 2024:&nbsp;
                <span style={{ fontWeight: 700, fontSize: 18 }}>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(dataPhanloai2024.sum || 0)}
                </span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: "gray" }}>
              (01/01/2024 - 19/02/2024)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Revenue12Months;
