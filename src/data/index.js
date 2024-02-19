import top10Hairs from "./services/hairs/top-10.json";
import top10HairFemales from "./services/hairs/top-10-female.json";
import top10HairMales from "./services/hairs/top-10-male.json";

import top10MassasMale from "./services/massas/top-10-male.json";
import top10MassasFemale from "./services/massas/top-10-female.json";
import top10Massas from "./services/massas/top-10.json";

import top10NailsMale from "./services/nails/top-10-male.json";
import top10NailsFemale from "./services/nails/top-10-female.json";
import top10Nails from "./services/nails/top-10.json";

import top10SPChamSocNam from "./products/top-10-cham-soc-nam.json";
import top10SPChamSocNu from "./products/top-10-cham-soc-nu.json";
import top10SPChamSoc from "./products/top-10-cham-soc.json";

import mainStaffHair from "./staff/main/main-staff-hair.json";
import mainStaffNail from "./staff/main/main-staff-nail.json";
import mainStaffMassa from "./staff/main/main-staff-massa.json";

import notMainStaffHair from "./staff/not-main/not-main-staff-hair.json";
import notMainStaffNail from "./staff/not-main/not-main-staff-nail.json";
import notMainStaffMassa from "./staff/not-main/not-main-staff-massa.json";
import staffSalary from "./staff/luong.json";

const getChartData = (title, type) => {
  if (type === "Sản phẩm") {
    return productData.filter((item) => item.text === title)[0];
  } else if (type === "Dịch vụ") {
    return serviceData.filter((item) => item.text === title)[0];
  }
  return [];
};

const getDetailsData = (type, title, index) => {
  let data;
  if (type === "Sản phẩm") {
    data = [...productData];
  } else if (type === "Dịch vụ") {
    data = [...serviceData];
  }

  const item = data.filter((item) => item.text === title)[0];
  return {
    text: item?.labels[index],
    count: item?.data[index],
    revenue: item?.revenues[index],
  };
};

const getStaffsData = (title, title1) => {
  const result = staffsData.filter(
    (item) => item.title === title && item.title1 === title1
  );
  return result ? result[0] : [];
};

const getStaffSalaryData = (title) => {
  const result = staffSalaryData.filter((item) => item.text === title);
  return result ? result[0] : [];
};

export const staffTitles = {
  main: "CHÍNH",
  notMain: "PHỤ",
};

export const staffTitles1 = {
  hair: "HAIR",
  nail: "NAIL",
  massa: "MASSA",
};

export const staffSalaryTitles = {
  top20: "Top thu nhập",
};

export const serviceTitles = {
  top10Hairs: "Chung",
  top10HairsMale: "Theo Nam",
  top10HairsFemale: "Theo Nữ",
};

export const productTitles = {
  top10SPChamSoc: "Top 10 Sản phẩm chăm sóc khách sử dụng nhiều",
  top10SPChamSocNam: "Top 10 Sản phẩm chăm sóc Nam khách sử dụng nhiều",
  top10SPChamSocNu: "Top 10 Sản phẩm chăm sóc Nu khách sử dụng nhiều",
};

export const revenueTitles = {
  byRevenues: "Tổng tiền đã thu",
  byOrderCount: "Số lượng Đơn hàng",
};

const serviceData = [
  {
    labels: top10Hairs.map((item) => item.name),
    data: top10Hairs.map((item) => item.count),
    revenues: top10Hairs.map((item) => item.revenue),
    text: serviceTitles.top10Hairs,
  },
  {
    labels: top10HairFemales.map((item) => item.name),
    data: top10HairFemales.map((item) => item.female.count),
    revenues: top10HairFemales.map((item) => item.revenue),
    text: serviceTitles.top10HairsFemale,
  },
  {
    labels: top10Massas.map((item) => item.name),
    data: top10Massas.map((item) => item.count),
    revenues: top10Massas.map((item) => item.revenue),
    text: serviceTitles.top10Massas,
  },
  {
    labels: top10MassasMale.map((item) => item.name),
    data: top10MassasMale.map((item) => item.male.count),
    revenues: top10MassasMale.map((item) => item.revenue),
    text: serviceTitles.top10MassasMale,
  },
  {
    labels: top10MassasFemale.map((item) => item.name),
    data: top10MassasFemale.map((item) => item.female.count),
    revenues: top10MassasFemale.map((item) => item.revenue),
    text: serviceTitles.top10MassasFemale,
  },

  {
    labels: top10Nails.map((item) => item.name),
    data: top10Nails.map((item) => item.count),
    revenues: top10Nails.map((item) => item.revenue),
    text: serviceTitles.top10Nails,
  },
  {
    labels: top10NailsMale.map((item) => item.name),
    data: top10NailsMale.map((item) => item.male.count),
    revenues: top10NailsMale.map((item) => item.revenue),
    text: serviceTitles.top10NailsMale,
  },
  {
    labels: top10NailsFemale.map((item) => item.name),
    data: top10NailsFemale.map((item) => item.female.count),
    revenues: top10NailsFemale.map((item) => item.revenue),
    text: serviceTitles.top10NailsFemale,
  },
];

const productData = [
  {
    labels: top10SPChamSoc.map((item) => item.name),
    data: top10SPChamSoc.map((item) => item.count),
    revenues: top10SPChamSoc.map((item) => item.revenue),
    text: productTitles.top10SPChamSoc,
  },
  {
    labels: top10SPChamSocNu.map((item) => item.name),
    data: top10SPChamSocNu.map((item) => item.female.count),
    revenues: top10SPChamSocNu.map((item) => item.revenue),
    text: productTitles.top10SPChamSocNu,
  },
  {
    labels: top10SPChamSocNam.map((item) => item.name),
    data: top10SPChamSocNam.map((item) => item.male.count),
    revenues: top10SPChamSocNam.map((item) => item.revenue),
    text: productTitles.top10SPChamSocNam,
  },
];

const staffsData = [
  {
    labels: mainStaffHair.map(
      (item) =>
        `${item.name} (${
          item.services.length !== 0 ? item.services[0].name : ""
        })`
    ),
    data: mainStaffHair.map((item) => item?.services[0]?.count || 0),
    commissions: mainStaffHair.map(
      (item) => item?.services[0]?.commission || 0
    ),
    title: staffTitles.main,
    title1: staffTitles1.hair,
  },
  {
    labels: mainStaffMassa.map(
      (item) =>
        `${item.name} (${
          item.services.length !== 0 ? item.services[0].name : ""
        })`
    ),
    data: mainStaffMassa.map((item) => item?.services[0]?.count || 0),
    commissions: mainStaffMassa.map(
      (item) => item?.services[0]?.commission || 0
    ),
    title: staffTitles.main,
    title1: staffTitles1.massa,
  },
  {
    labels: mainStaffNail.map(
      (item) =>
        `${item.name} (${
          item.services.length !== 0 ? item.services[0].name : ""
        })`
    ),
    data: mainStaffNail.map((item) => item?.services[0]?.count || 0),
    commissions: mainStaffNail.map(
      (item) => item?.services[0]?.commission || 0
    ),
    title: staffTitles.main,
    title1: staffTitles1.nail,
  },

  {
    labels: notMainStaffHair.map(
      (item) =>
        `${item.name} (${
          item.services.length !== 0 ? item.services[0].name : ""
        })`
    ),
    data: notMainStaffHair.map((item) => item?.services[0]?.count || 0),
    commissions: notMainStaffHair.map(
      (item) => item?.services[0]?.commission || 0
    ),
    title: staffTitles.notMain,
    title1: staffTitles1.hair,
  },
  {
    labels: notMainStaffMassa.map(
      (item) =>
        `${item.name} (${
          item.services.length !== 0 ? item.services[0].name : ""
        })`
    ),
    data: notMainStaffMassa.map((item) => item?.services[0]?.count || 0),
    commissions: notMainStaffMassa.map(
      (item) => item?.services[0]?.commission || 0
    ),
    title: staffTitles.notMain,
    title1: staffTitles1.massa,
  },
  {
    labels: notMainStaffNail.map(
      (item) =>
        `${item.name} (${
          item.services.length !== 0 ? item.services[0].name : ""
        })`
    ),
    data: notMainStaffNail.map((item) => item?.services[0]?.count || 0),
    commissions: notMainStaffNail.map(
      (item) => item?.services[0]?.commission || 0
    ),
    title: staffTitles.notMain,
    title1: staffTitles1.nail,
  },
];

const staffSalaryData = [
  {
    labels: staffSalary.map((item) => item.name),
    data: staffSalary.map((item) => item.salary),
    data1: staffSalary.map((item) => item.revenue),
    text: staffSalaryTitles.top20,
  },
];

export { getChartData, getDetailsData, getStaffsData, getStaffSalaryData };
