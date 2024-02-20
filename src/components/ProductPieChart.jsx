import React from "react";
import top10chamsoc from "../data/products/top-10-cham-soc.json";
import top10chamsocNam from "../data/products/top-10-cham-soc-nam.json";
import top10chamsocNu from "../data/products/top-10-cham-soc-nu.json";

import { Pie } from "react-chartjs-2";
import MyPieChart from "./MyPieChart";
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
      counts.push(item.male.count);
    });
    return { labels, counts };
  }, [type]);

  const dataChamSocNu = React.useMemo(() => {
    const labels = [];
    const counts = [];
    top10chamsocNu.forEach((item) => {
      labels.push(item.name);
      counts.push(item.female.count);
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
        Thống kê Top Sản phẩm về chăm sóc được sử dụng nhiều năm 2023
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
          <div style={{ width: "35vw", textAlign: "center" }}>
            <MyPieChart data={dataChamSoc.counts} labels={dataChamSoc.labels} />
            <p style={{ marginTop: 5 }}>Chung</p>
          </div>
          <div style={{ width: "35vw", textAlign: "center" }}>
            <MyPieChart
              data={dataChamSocNam.counts}
              labels={dataChamSocNam.labels}
            />
            <p style={{ marginTop: 5 }}>Theo Nam</p>
          </div>
        </div>
        <div style={{ width: "35vw", textAlign: "center" }}>
          <MyPieChart
            data={dataChamSocNu.counts}
            labels={dataChamSocNu.labels}
          />
          <p style={{ marginTop: 5 }}>Theo Nữ</p>
        </div>
      </div>
    </>
  );
};

export default ProductPieChart;
