<<<<<<< HEAD
import { Checkbox, Dropdown, Menu, Table, Tabs, Tag } from "antd";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { DownOutlined } from "@ant-design/icons";
import Column from "antd/lib/table/Column";

const Main = () => {
  const [showOperationgStatus, setShowOperationgStatus] = useState(false);

  const [selectedOperationgStatus, setSelectedOperationgStatus] = useState([
    { name: "รับแจ้งคดีแล้ว", check: true },
    { name: "กำลังตรวจสอบ", check: true },
    { name: "ตรวจสอบเสร็จสิ้น", check: false },
    { name: "ปิดคดี", check: false },
  ]);

  const menuOperatingStatus = (
    <Menu>
      <Menu.Item>
        <Checkbox disabled> เลือกสถานะการดำเนินงาน </Checkbox>
      </Menu.Item>
      {selectedOperationgStatus.map((item) => (
        <Menu.Item key={item.name}>
          <Checkbox
            onClick={() => setShowOperationgStatus(true)}
            onChange={(e) => {
              const newSelected: any = selectedOperationgStatus.map(
                (status: { name: string; check: boolean }) => {
                  return {
                    name: status.name,
                    check:
                      status.name === item.name
                        ? e.target.checked
                        : status.check,
                  };
                }
              );
              setSelectedOperationgStatus(newSelected);
            }}
          >
            {item.name}
          </Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );

  const operations = (
    <div
      className="h-8 flex justify-center items-center rounded-md"
      style={{
        backgroundColor: "#072A4B",
        width: "160px",
        marginRight: "24px",
      }}
    >
      <Dropdown
        visible={showOperationgStatus}
        overlay={menuOperatingStatus}
        onVisibleChange={setShowOperationgStatus}
      >
        <div className="text-white">
          สถานะการดำเนินงาน <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );

  const data = [
    {
      key: "1",
      caseID: "111111",
      operatingStatus: ["รับแจ้งคดีแล้ว"],
      goods: "กางเกง",
      reportDate: "12.08.2020",
      staff: "ทำงานหนักมาก",
      result: ["กำลังดำเนินการ"],
    },
    {
      key: "2",
      caseID: "111111",
      operatingStatus: ["กำลังตรวจสอบ"],
      goods: "กางเกง",
      reportDate: "12.08.2020",
      staff: "ทำงานหนักมาก",
      result: ["กำลังดำเนินการ"],
    },
    {
      key: "3",
      caseID: "111111",
      operatingStatus: ["ตรวจสอบเสร็จสิ้น"],
      goods: "กางเกง",
      reportDate: "12.08.2020",
      staff: "ทำงานหนักมาก",
      result: ["กำลังดำเนินการ"],
    },
    {
      key: "4",
      caseID: "111111",
      operatingStatus: ["ปิดคดี"],
      goods: "กางเกง",
      reportDate: "12.08.2020",
      staff: "ทำงานหนักมาก",
      result: ["ฉ้อโกง"],
    },
    {
      key: "5",
      caseID: "111111",
      operatingStatus: ["ปิดคดี"],
      goods: "กางเกง",
      reportDate: "12.08.2020",
      staff: "ทำงานหนักมาก",
      result: ["บริสุทธิ์"],
    },
    {
      key: "6",
      caseID: "111111",
      operatingStatus: ["ปิดคดี"],
      goods: "กางเกง",
      reportDate: "12.08.2020",
      staff: "ทำงานหนักมาก",
      result: ["บริสุทธิ์"],
    },
    {
      key: "7",
      caseID: "111111",
      operatingStatus: ["ปิดคดี"],
      goods: "กางเกง",
      reportDate: "12.08.2020",
      staff: "ทำงานหนักมาก",
      result: ["บริสุทธิ์"],
    },
    {
      key: "8",
      caseID: "111111",
      operatingStatus: ["ปิดคดี"],
      goods: "กางเกง",
      reportDate: "12.08.2020",
      staff: "ทำงานหนักมาก",
      result: ["ฉ้อโกง"],
    },
    {
      key: "9",
      caseID: "111111",
      operatingStatus: ["ปิดคดี"],
      goods: "กางเกง",
      reportDate: "12.08.2020",
      staff: "ทำงานหนักมาก",
      result: ["บริสุทธิ์"],
    },
    {
      key: "10",
      caseID: "111111",
      operatingStatus: ["ปิดคดี"],
      goods: "กางเกง",
      reportDate: "12.08.2020",
      staff: "ทำงานหนักมาก",
      result: ["ฉ้อโกง"],
    },
    {
      key: "11",
      caseID: "111111",
      operatingStatus: ["รับแจ้งคดีแล้ว"],
      goods: "กางเกง",
      reportDate: "12.08.2020",
      staff: "ทำงานหนักมาก",
      result: ["กำลังดำเนินการ"],
    },
    {
      key: "12",
      caseID: "111111",
      operatingStatus: ["กำลังตรวจสอบ"],
      goods: "กางเกง",
      reportDate: "12.08.2020",
      staff: "ทำงานหนักมาก",
      result: ["กำลังดำเนินการ"],
    },
  ];

  const caseTable = (
    <Table
      style={{
        marginTop: "2rem",
        backgroundColor: "white",
      }}
      dataSource={data}
      pagination={{ pageSize: 6, showQuickJumper: true }}
    >
      <Column title="CaseID" dataIndex="caseID" key="caseID" />
      <Column
        title="สถานะการดำเนินงาน"
        dataIndex="operatingStatus"
        key="operatingStatus"
        render={(operatingStatus) => (
          <>
            {operatingStatus.map((operatingStatus) => {
              const tagColor =
                operatingStatus === "รับแจ้งคดีแล้ว"
                  ? "#072A4B"
                  : operatingStatus === "กำลังตรวจสอบ"
                  ? "#E0CA00"
                  : operatingStatus === "ตรวจสอบเสร็จสิ้น"
                  ? "#279700"
                  : operatingStatus === "ปิดคดี"
                  ? "#7D7D7D"
                  : "black";
              return (
                <Tag
                  color={tagColor}
                  key={operatingStatus}
                  style={{
                    height: "28px",
                    width: "120px",
                    fontSize: "14px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0.375rem",
                  }}
                >
                  {operatingStatus}
                </Tag>
              );
            })}
          </>
        )}
      />
      <Column title="สินค้า" dataIndex="goods" key="goods" />
      <Column title="วันที่ร้องทุกข์" dataIndex="reportDate" key="reportDate" />
      <Column title="เจ้าหน้าที่" dataIndex="staff" key="staff" />
      <Column
        title="ผลการตรวจสอบ"
        dataIndex="result"
        key="result"
        render={(result) => (
          <>
            {result.map((result) => {
              const tagColor =
                result === "กำลังดำเนินการ"
                  ? "#7D7D7D"
                  : result === "ฉ้อโกง"
                  ? "#FF0000"
                  : result === "บริสุทธิ์"
                  ? "#279700"
                  : "black";
              return (
                <Tag
                  color={tagColor}
                  key={result}
                  style={{
                    height: "28px",
                    width: "120px",
                    fontSize: "14px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0.375rem",
                  }}
                >
                  {result}
                </Tag>
              );
            })}
          </>
        )}
      />
    </Table>
  );
  return (
    <div style={{ background: "#ffffff" }} className="h-screen">
      <Navbar />
      <div style={{ padding: "32px", marginLeft: "56px", marginRight: "56px" }}>
        <Tabs size={"large"} tabBarExtraContent={operations}>
          <Tabs.TabPane tab={<div className="mx-3">คดีของฉัน</div>} key="1">
            {caseTable}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<div className="mx-3">คดีทั้งหมด</div>} key="2">
            {caseTable}
          </Tabs.TabPane>
        </Tabs>
      </div>
=======
import React from "react";
import { formatInput } from "../components/utils";

const Main = () => {
  return (
    <div style={{ background: "#fbfbfb" }} className="h-screen p-24">
      <input
        type="text"
        onChange={(e) => formatInput(e, "xxx-xxx-xxxx")}
        className="border border-black"
      />
>>>>>>> cf75c2f41e1e1bd11bb3825e5169e4470b4349e5
    </div>
  );
};

export default Main;
