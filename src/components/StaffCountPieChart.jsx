import React from "react";
import staffData from "../data/staff/main/chia-theo-so-lan.json";
import notMainStaffData from "../data/staff/not-main/chia-theo-so-lan.json";

import { staffTitles } from "../data";
import MyPieChart from "./MyPieChart";

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
        Thống kê Top {type === staffTitles.main ? "Thợ chính " : "Top Thợ phụ"}{" "}
        2023
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
              <MyPieChart
                labels={["Cắt", "Uốn", "Gội", "Sấy", "Tẩy", "Nhuộm"]}
                data={[
                  item.count.cat,
                  item.count.uon,
                  item.count.goi,
                  item.count.say,
                  item.count.tay,
                  item.count.nhuom,
                ]}
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
              <MyPieChart
                labels={["Cắt", "Uốn", "Gội", "Sấy", "Tẩy", "Nhuộm"]}
                data={[
                  item.count.cat,
                  item.count.uon,
                  item.count.goi,
                  item.count.say,
                  item.count.tay,
                  item.count.nhuom,
                ]}
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
