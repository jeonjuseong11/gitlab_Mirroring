import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
const department = [
  {
    name: "학교 이름1",
    descript: "학교 랭킹1",
  },
  {
    name: "학교 이름2",
    descript: "학교 랭킹2",
  },
  {
    name: "학교 이름3",
    descript: "학교 랭킹3",
  },
  {
    name: "학교 이름4",
    descript: "학교 랭킹4",
  },
  {
    name: "학교 이름5",
    descript: "학교 랭킹5",
  },
];
const DepartmentList = () => {
  return (
    <div style={{ margin: "0 auto", width: "70%" }}>
      {department.map((v) => (
        <Card
          key={v.name}
          style={{
            width: 200,
            marginRight: "0.5rem",
            display: "inline-block",
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta title={v.name} description={v.descript} />
        </Card>
      ))}
    </div>
  );
};

export default DepartmentList;
