import React from "react";
import top10chamsoc from "../data/products/top-10-cham-soc.json";
import top10chamsocNam from "../data/products/top-10-cham-soc-nam.json";
import top10chamsocNu from "../data/products/top-10-cham-soc-nu.json";

import { Pie } from "react-chartjs-2";
const ProductPieChart = ({ type }) => {
  const dataChamSoc = React.useMemo(() => {
    const labels = [];
    const counts = [];
    top10chamsoc.forEach((item) => {
      labels.push(item.name);
      counts.push(item.count);
    });
    return { labels, counts };
  }, [type]);

  const dataChamSocNam = React.useMemo(() => {
    const labels = [];
    const counts = [];
    top10chamsocNam.forEach((item) => {
      labels.push(item.name);
      counts.push(item.count);
    });
    return { labels, counts };
  }, [type]);

  const dataChamSocNu = React.useMemo(() => {
    const labels = [];
    const counts = [];
    top10chamsocNu.forEach((item) => {
      labels.push(item.name);
      counts.push(item.count);
    });
    return { labels, counts };
  }, [type]);

  return (
    <>
      <p
        style={{
          paddingBottom: 25,
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Thống kê Top 10 Sản phẩm về chăm sóc được sử dụng nhiều năm 2023
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <div style={{ width: "30vw", textAlign: "center" }}>
            <Pie
              options={{
                responsive: true,
              }}
              data={{
                labels: dataChamSoc.labels,
                datasets: [
                  {
                    data: dataChamSoc.counts,
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
            <p style={{ marginTop: 5 }}>Chung</p>
          </div>
          <div style={{ width: "30vw", textAlign: "center" }}>
            <Pie
              options={{
                responsive: true,
              }}
              data={{
                labels: dataChamSocNam.labels,
                datasets: [
                  {
                    data: dataChamSocNam.counts,
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
            <p style={{ marginTop: 5 }}>Theo Nam</p>
          </div>
        </div>
        <div style={{ width: "30vw", textAlign: "center" }}>
          <Pie
            options={{
              responsive: true,
            }}
            data={{
              labels: dataChamSocNu.labels,
              datasets: [
                {
                  data: dataChamSocNu.counts,
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
          <p style={{ marginTop: 5 }}>Theo Nữ</p>
        </div>
      </div>
    </>
  );
};

export default ProductPieChart;
