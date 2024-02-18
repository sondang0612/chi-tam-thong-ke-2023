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
          position: "absolute",
          top: 10,
          fontSize: 24,
          fontWeight: 700,
          right: "50%",
          transform: "translateX(50%)",
        }}
      >
        Thống kê {type === staffTitles.main ? "Thợ chính " : "Top Thợ phụ"} 2023
      </p>

      <div
        style={{
          position: "absolute",
          right: "50%",
          transform: "translateX(50%)",
          top: 50,
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {data.slice(0, 4).map((item) => (
            <div key={item.name} style={{ width: "18vw", textAlign: "center" }}>
              <Pie
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
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
          }}
        >
          {data.slice(4, 8).map((item) => (
            <div key={item.name} style={{ width: "18vw", textAlign: "center" }}>
              <Pie
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
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
          }}
        ></div>
      </div>
    </>
  );
};

export default StaffCountPieChart;
