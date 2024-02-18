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
          position: "absolute",
          bottom: 25,
          fontSize: 24,
          fontWeight: 700,
          right: "50%",
          transform: "translateX(50%)",
          textAlign: "center",
        }}
      >
        Thống kê Top 10 Sản phẩm về chăm sóc được sử dụng nhiều năm 2023
      </p>
      <div
        style={{
          position: "absolute",
          right: "50%",
          transform: "translateX(50%)",
          top: 50,
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ width: "26vw", textAlign: "center" }}>
            <Pie
              options={{
                responsive: true,
                maintainAspectRatio: true,
              }}
              data={{
                labels: dataChamSoc.labels,
                datasets: [
                  {
                    data: dataChamSoc.counts,
                  },
                ],
              }}
            />
            <p style={{ marginTop: 5 }}>Chung</p>
          </div>
          <div style={{ width: "26vw", textAlign: "center" }}>
            <Pie
              options={{
                responsive: true,
                maintainAspectRatio: true,
              }}
              data={{
                labels: dataChamSocNam.labels,
                datasets: [
                  {
                    data: dataChamSocNam.counts,
                  },
                ],
              }}
            />
            <p style={{ marginTop: 5 }}>Theo Nam</p>
          </div>
          <div style={{ width: "26vw", textAlign: "center" }}>
            <Pie
              options={{
                responsive: true,
                maintainAspectRatio: true,
              }}
              data={{
                labels: dataChamSocNu.labels,
                datasets: [
                  {
                    data: dataChamSocNu.counts,
                  },
                ],
              }}
            />
            <p style={{ marginTop: 5 }}>Theo Nữ</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPieChart;
