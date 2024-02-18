import { Select } from "antd";
import React from "react";
import { categories } from "../App";

const MySelect = ({
  category,
  setCategory,
  titles,
  title,
  setTitle,
  titles1,
  setTitles1,
  title1,
  setTitle1,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginBottom: 10,
      }}
      id="select_container"
    >
      <Select
        defaultValue={categories[0]}
        onChange={(category) => setCategory(category)}
        value={category}
        style={{ width: "100%", minWidth: 150 }}
      >
        {categories.map((item) => {
          return (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          );
        })}
      </Select>
      <Select
        defaultValue={title}
        value={title}
        onChange={(value) => setTitle(value)}
        style={{ width: "100%", minWidth: 200 }}
        id="select_description"
      >
        {Object.entries(titles).map((item) => {
          return (
            <Select.Option key={item[0]} value={item[1]}>
              {item[1]}
            </Select.Option>
          );
        })}
      </Select>
      {category === categories[3] && (
        <Select
          style={{ width: "100%", minWidth: 100 }}
          defaultValue={title1}
          value={title1}
          onChange={(value) => setTitle1(value)}
          id="select_sub_description"
        >
          {Object.entries(titles1).map((item) => {
            return (
              <Select.Option key={item[0]} value={item[1]}>
                {item[1]}
              </Select.Option>
            );
          })}
        </Select>
      )}
    </div>
  );
};

export default MySelect;
