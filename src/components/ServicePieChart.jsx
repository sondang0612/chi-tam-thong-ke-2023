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
          bottom: 25,
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
          paddingBottom: 20,
        }}
      >
        Thống kê Top 10 Dịch vụ {type !== "Chung" ? type : ""} được sử dụng
        nhiều năm 2023
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
            <Pie
              options={{
                responsive: true,
              }}
              data={{
                labels: dataHairs.labels,
                datasets: [
                  {
                    data: dataHairs.counts,
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
            <p style={{ marginTop: 5 }}>Hairs</p>
          </div>
          <div style={{ width: "25vw", textAlign: "center" }}>
            <Pie
              options={{
                responsive: true,
              }}
              data={{
                labels: dataMassa.labels,
                datasets: [
                  {
                    data: dataMassa.counts,
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
            <p style={{ marginTop: 5 }}>Massa</p>
          </div>
          <div style={{ width: "25vw", textAlign: "center" }}>
            <Pie
              options={{
                responsive: true,
              }}
              data={{
                labels: dataNails.labels,
                datasets: [
                  {
                    data: dataNails.counts,
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
            <p style={{ marginTop: 5 }}>Tóc</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePieChart;
