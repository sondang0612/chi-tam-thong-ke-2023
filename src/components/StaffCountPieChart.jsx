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
          {data.slice(0, 3).map((item) => (
            <div key={item.name} style={{ width: "25vw", textAlign: "center" }}>
              <MyPieChart
                labels={["Cắt", "Uốn", "Sấy", "Tẩy", "Nhuộm"]}
                data={[
                  item.count.cat,
                  item.count.uon,
                  item.count.say,
                  item.count.tay,
                  item.count.nhuom,
                ]}
              />
              <p style={{ marginTop: 5, fontWeight: 700 }}>{item.name}</p>
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
          {data.slice(3, 6).map((item) => (
            <div key={item.name} style={{ width: "25vw", textAlign: "center" }}>
              <MyPieChart
                labels={["Cắt", "Uốn", "Sấy", "Tẩy", "Nhuộm"]}
                data={[
                  item.count.cat,
                  item.count.uon,
                  item.count.say,
                  item.count.tay,
                  item.count.nhuom,
                ]}
              />
              <p style={{ marginTop: 5, fontWeight: 700 }}>{item.name}</p>
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
          <div style={{ width: "25vw", textAlign: "center" }}>
            <MyPieChart
              labels={["Cắt", "Uốn", "Sấy", "Tẩy", "Nhuộm"]}
              data={[
                data[6].count.cat,
                data[6].count.uon,
                data[6].count.say,
                data[6].count.tay,
                data[6].count.nhuom,
              ]}
            />
            <p style={{ marginTop: 5, fontWeight: 700 }}>{data[6].name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffCountPieChart;
