import React from "react";
import { Pie } from "react-chartjs-2";
import phanloai2023 from "../data/revenue/phanloai2023.json";
import phanloai2024 from "../data/revenue/phanloai2024.json";

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
          <div style={{ width: "25vw", textAlign: "center" }}>
            <Pie
              options={{
                responsive: true,
              }}
              data={{
                labels: dataPhanloai2023.labels,
                datasets: [
                  {
                    data: dataPhanloai2023.counts,
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
                (01-01-2023 - 01-12-2023)
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
          <div style={{ width: "25vw", textAlign: "center" }}>
            <Pie
              options={{
                responsive: true,
              }}
              data={{
                labels: dataPhanloai2024.labels,
                datasets: [
                  {
                    data: dataPhanloai2024.counts,
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
              <p style={{ fontSize: 14, color: "gray" }}>
                (01-01-2024 - 19-02-2024)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Revenue12Months;
