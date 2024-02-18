import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import React from "react";

import { Modal } from "antd";
import MainChart from "./components/MainChart";
import MySelect from "./components/MySelect";
import Revenue12Months from "./components/Revenue12Months";
import {
  getChartData,
  getDetailsData,
  getStaffSalaryData,
  productTitles,
  revenueTitles,
  serviceTitles,
  staffSalaryTitles,
  staffTitles,
  staffTitles1,
} from "./data";
import MainChart1 from "./components/MainChart1";
import DoubleChartBar from "./components/DoubleChartBar";
import StaffCountPieChart from "./components/StaffCountPieChart";
import ServicePieChart from "./components/ServicePieChart";
import ProductPieChart from "./components/ProductPieChart";

Chart.register(CategoryScale);

export const categories = [
  "Doanh thu",
  "Dịch vụ",
  "Sản phẩm",
  "Thợ",
  "Thu nhập",
];

function App() {
  const [chart, setChart] = React.useState({
    labels: [],
    data: [],
    text: "Lorem...",
  });
  const [category, setCategory] = React.useState(categories[0]);
  const [titles, setTitles] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [clickedData, setClickedData] = React.useState(undefined);
  const [modal, setModal] = React.useState(false);
  React.useEffect(() => {
    if (category === categories[2]) {
      setTitles(productTitles);
      setTitle(productTitles.top10SPChamSoc);
    } else if (category === categories[1]) {
      setTitles(serviceTitles);
      setTitle(serviceTitles.top10Hairs);
    } else if (category === categories[0]) {
      setTitles(revenueTitles);
      setTitle(revenueTitles.byRevenues);
    } else if (category === categories[3]) {
      setTitles(staffTitles);
      setTitle(staffTitles.main);
    } else if (category === categories[4]) {
      setTitles(staffSalaryTitles);
      setTitle(staffSalaryTitles.top20);
    }
  }, [category, setTitles, setTitle]);

  React.useEffect(() => {
    if (title && category) {
      if (category === categories[1] || category === categories[2]) {
        setChart(getChartData(title, category));
      } else if (category === categories[4]) {
        setChart(getStaffSalaryData(title));
      }
    }
  }, [category, title, setChart]);

  const onClickedData = (index, additionalData) => {
    setModal(true);
    if (category === categories[1] || category === categories[2]) {
      setClickedData(getDetailsData(category, chart.text, index));
    } else if (category === categories[3]) {
      setClickedData(additionalData);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <MySelect
        setChart={setChart}
        category={category}
        setCategory={setCategory}
        setTitle={setTitle}
        title={title}
        titles={titles}
      />
      <div
        style={{
          backgroundColor: "#fff",
          width: "80%",
          padding: 50,
          minHeight: "80vh",
          borderRadius: 10,
          position: "relative",
          borderWidth: 2,
          borderColor: "rgba(244, 67, 54,0.5)",
          borderStyle: "solid",
        }}
      >
        {category === categories[0] ? (
          <Revenue12Months title={title} />
        ) : category === categories[3] ? (
          <StaffCountPieChart type={title} />
        ) : category === categories[4] ? (
          <DoubleChartBar onClickedData={onClickedData} title={title} />
        ) : category === categories[1] ? (
          <ServicePieChart type={title} />
        ) : (
          <ProductPieChart type={title} />
        )}
      </div>
      <Modal
        open={modal}
        okButtonProps={{ style: { color: "#fff" } }}
        title="Thống kê chi tiết"
        footer={null}
        onCancel={() => setModal(false)}
        styles={{
          content: { backgroundColor: "rgba(0,0,0,0.5)" },
          header: { display: "none" },
          mask: { display: "none" },
        }}
      >
        <h3 style={{ color: "#fff" }}>{clickedData?.text}</h3>
        {category === categories[3] && (
          <p style={{ color: "#fff" }}>
            Tên dịch vụ:&nbsp;
            <span style={{ fontWeight: 500 }}>{clickedData?.serviceName}</span>
          </p>
        )}
        <p style={{ color: "#fff" }}>
          Số lượng:&nbsp;
          <span style={{ fontWeight: 500 }}>{clickedData?.count}</span>
        </p>
        {category !== categories[3] && (
          <span style={{ color: "#fff" }}>
            {category === categories[4] ? "Lương" : "Thực nhận:"}&nbsp;
            <span style={{ fontWeight: 500 }}>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(clickedData?.revenue || 0)}
            </span>
          </span>
        )}
      </Modal>
    </div>
  );
}

export default App;
