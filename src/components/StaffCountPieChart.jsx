import React from "react";
import { Pie } from "react-chartjs-2";
import staffData from "../data/staff/main/chia-theo-so-lan.json";
import notMainStaffData from "../data/staff/not-main/chia-theo-so-lan.json";

import { staffTitles } from "../data";

const StaffCountPieChart = ({ type }) => {
  const data = type === staffTitles.main ? staffData : notMainStaffData;
  return (
    <>
      <p
        style={{
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
          paddingBottom: 10,
        }}
      >
        Thống kê {type === staffTitles.main ? "Thợ chính " : "Top Thợ phụ"} 2023
      </p>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data.slice(0, 4).map((item) => (
            <div key={item.name} style={{ width: "20vw", textAlign: "center" }}>
              <Pie
                options={{
                  responsive: true,
                }}
                key={item.name}
                data={{
                  labels: ["Cắt", "Uốn", "Gội", "Sấy", "Tẩy", "Nối", "Nhuộm"],
                  datasets: [
                    {
                      data: [
                        item.count.cat,
                        item.count.uon,
                        item.count.goi,
                        item.count.say,
                        item.count.tay,
                        item.count.noi,
                        item.count.nhuom,
                      ],
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
              <p style={{ marginTop: 5 }}>{item.name}</p>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data.slice(4, 8).map((item) => (
            <div key={item.name} style={{ width: "20vw", textAlign: "center" }}>
              <Pie
                options={{
                  responsive: true,
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
                }}
                key={item.name}
                data={{
                  labels: ["Cắt", "Uốn", "Gội", "Sấy", "Tẩy", "Nối", "Nhuộm"],
                  datasets: [
                    {
                      data: [
                        item.count.cat,
                        item.count.uon,
                        item.count.goi,
                        item.count.say,
                        item.count.tay,
                        item.count.noi,
                        item.count.nhuom,
                      ],
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
              <p style={{ marginTop: 5 }}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaffCountPieChart;
