import React from "react";
import luongData from "../data/staff/luong.json";

import MyPieChart from "./MyPieChart";

const StaffRevenue = () => {
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
        Thống kê thu nhập 2023
      </p>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {luongData.slice(0, 4).map((item) => (
            <div key={item.name} style={{ width: "20vw", textAlign: "center" }}>
              <MyPieChart
                labels={["Doanh thu", "Lương"]}
                data={[item.revenue, item.salary]}
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
          {luongData.slice(4, 8).map((item) => (
            <div key={item.name} style={{ width: "20vw", textAlign: "center" }}>
              <div
                key={item.name}
                style={{ width: "20vw", textAlign: "center" }}
              >
                <MyPieChart
                  labels={["Doanh thu", "Lương"]}
                  data={[item.revenue, item.salary]}
                />
                <p style={{ marginTop: 5 }}>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaffRevenue;
