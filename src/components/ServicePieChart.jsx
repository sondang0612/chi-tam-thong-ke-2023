import React from "react";
import top10Hairs from "../data/services/hairs/top-10.json";
import top10Nails from "../data/services/nails/top-10.json";
import top10Massa from "../data/services/massas/top-10.json";

import top10HairsFemale from "../data/services/hairs/top-10-female.json";
import top10NailsFemale from "../data/services/nails/top-10-female.json";
import top10MassaFemale from "../data/services/massas/top-10-female.json";

import top10HairsMale from "../data/services/hairs/top-10-male.json";
import top10NailsMale from "../data/services/nails/top-10-male.json";
import top10MassaMale from "../data/services/massas/top-10-male.json";

import MyPieChart from "./MyPieChart";
const ServicePieChart = ({ type }) => {
  const dataHairs = React.useMemo(() => {
    const labels = [];
    const counts = [];
    const data =
      type === "Chung"
        ? top10Hairs
        : type === "Theo Nam"
        ? top10HairsMale
        : top10HairsFemale;
    data.forEach((item) => {
      labels.push(item.name);
      counts.push(
        type === "Chung"
          ? item.count
          : type === "Theo Nam"
          ? item.male.count
          : item.female.count
      );
    });
    return { labels, counts };
  }, [type]);

  const dataMassa = React.useMemo(() => {
    const labels = [];
    const counts = [];
    const data =
      type === "Chung"
        ? top10Massa
        : type === "Theo Nam"
        ? top10MassaMale
        : top10MassaFemale;

    data.forEach((item) => {
      labels.push(item.name);
      counts.push(
        type === "Chung"
          ? item.count
          : type === "Theo Nam"
          ? item.male.count
          : item.female.count
      );
    });
    return { labels, counts };
  }, [type]);

  const dataNails = React.useMemo(() => {
    const labels = [];
    const counts = [];
    const data =
      type === "Chung"
        ? top10Nails
        : type === "Theo Nam"
        ? top10NailsMale
        : top10NailsFemale;
    data.forEach((item) => {
      labels.push(item.name);
      counts.push(
        type === "Chung"
          ? item.count
          : type === "Theo Nam"
          ? item.male.count
          : item.female.count
      );
    });
    return { labels, counts };
  }, [type]);

  return (
    <>
      <p
        style={{
          bottom: 25,
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
          paddingBottom: 20,
        }}
      >
        Thống kê Top Dịch vụ {type !== "Chung" ? type : ""} được sử dụng nhiều
        năm 2023
      </p>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "25vw", textAlign: "center" }}>
            <MyPieChart labels={dataHairs.labels} data={dataHairs.counts} />
            <p style={{ marginTop: 5 }}>Tóc</p>
          </div>
          <div style={{ width: "25vw", textAlign: "center" }}>
            <MyPieChart labels={dataMassa.labels} data={dataMassa.counts} />
            <p style={{ marginTop: 5 }}>Massage</p>
          </div>
          <div style={{ width: "25vw", textAlign: "center" }}>
            <MyPieChart labels={dataNails.labels} data={dataNails.counts} />
            <p style={{ marginTop: 5 }}>Nail</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePieChart;
