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

import { Pie } from "react-chartjs-2";
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
      counts.push(item.count);
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
      counts.push(item.count);
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
        Thống kê Top 10 Dịch vụ {type !== "Chung" ? type : ""} được sử dụng
        nhiều năm 2023
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
          <div style={{ width: "25vw", textAlign: "center" }}>
            <Pie
              options={{
                responsive: true,
                maintainAspectRatio: true,
              }}
              data={{
                labels: dataHairs.labels,
                datasets: [
                  {
                    data: dataHairs.counts,
                  },
                ],
              }}
            />
            <p style={{ marginTop: 5 }}>Hairs</p>
          </div>
          <div style={{ width: "25vw", textAlign: "center" }}>
            <Pie
              options={{
                responsive: true,
                maintainAspectRatio: true,
              }}
              data={{
                labels: dataMassa.labels,
                datasets: [
                  {
                    data: dataMassa.counts,
                  },
                ],
              }}
            />
            <p style={{ marginTop: 5 }}>Massa</p>
          </div>
          <div style={{ width: "25vw", textAlign: "center" }}>
            <Pie
              options={{
                responsive: true,
                maintainAspectRatio: true,
              }}
              data={{
                labels: dataNails.labels,
                datasets: [
                  {
                    data: dataNails.counts,
                  },
                ],
              }}
            />
            <p style={{ marginTop: 5 }}>Tóc</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePieChart;
