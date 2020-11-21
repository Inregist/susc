import { Checkbox, Dropdown, Menu, Table, Tabs, Tag } from "antd";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { DownOutlined } from "@ant-design/icons";
import Column from "antd/lib/table/Column";
import CaseDetailModal from "../components/CaseDetailModal";

export interface CaseType {
  show: boolean;
  data:
    | {
        key: string;
        caseID: string;
        operatingStatus:
          | "รับแจ้งคดีแล้ว"
          | "กำลังตรวจสอบ"
          | "ตรวจสอบเสร็จสิ้น"
          | "ปิดคดี";
        goods: string;
        reportDate: string;
        staff: "string";
        result: "กำลังดำเนินการ" | "ฉ้อโกง" | "บริสุทธิ์";
      }
    | {};
}

const Main = () => {
  const [caseData, setCaseData] = useState<CaseType>({ show: false, data: {} });

  const [showOperationgStatus, setShowOperationgStatus] = useState(false);

  const [selectedOperationgStatus, setSelectedOperationgStatus] = useState([
    { name: "รับแจ้งคดีแล้ว", check: true },
    { name: "กำลังตรวจสอบ", check: true },
    { name: "ตรวจสอบเสร็จสิ้น", check: false },
    { name: "ปิดคดี", check: false },
  ]);

  const menuOperatingStatus = (
    <Menu>
      <Menu.Item>เลือกสถานะการดำเนินงาน</Menu.Item>
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

  const [data, setData] = useState(
    Array(20)
      .fill(0)
      .map((d, i) => ({
        key: `${i}`,
        caseID: `C${i.toString().padStart(3, "0")}`,
        operatingStatus: [
          "รับแจ้งคดีแล้ว",
          "กำลังตรวจสอบ",
          "ตรวจสอบเสร็จสิ้น",
          "ปิดคดี",
        ][Math.floor(Math.random() * 4)],
        goods: "กางเกง",
        reportDate: "12.08.2020",
        staff: ["ทำงานหนักมาก", "ฉันไม่ทำงาน"][Math.floor(Math.random() * 2)],
        result: ["กำลังดำเนินการ", "ฉ้อโกง", "บริสุทธิ์"][
          Math.floor(Math.random() * 3)
        ],
      }))
  );

  return (
    <div style={{ background: "#ffffff" }} className="h-screen">
      <Navbar />
      <div style={{ padding: "32px", marginLeft: "56px", marginRight: "56px" }}>
        <Tabs size={"large"} tabBarExtraContent={operations}>
          <Tabs.TabPane tab={<div className="mx-3">คดีของฉัน</div>} key="1">
            <CaseTable
              data={data.filter((d) => d.staff === "ทำงานหนักมาก")}
              setCaseData={setCaseData}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<div className="mx-3">คดีทั้งหมด</div>} key="2">
            <CaseTable data={data} />
          </Tabs.TabPane>
        </Tabs>
      </div>
      <CaseDetailModal caseData={caseData} setCaseData={setCaseData} />
    </div>
  );
};

export default Main;

const CaseTable = ({ data, setCaseData = (n: CaseType) => {} }) => (
  <Table
    onRow={(rec, idx) => ({
      onClick: () => setCaseData({ show: true, data: rec }),
    })}
    rowClassName="cursor-pointer"
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
      render={(operatingStatus) => {
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
      }}
    />
    <Column title="สินค้า" dataIndex="goods" key="goods" />
    <Column title="วันที่ร้องทุกข์" dataIndex="reportDate" key="reportDate" />
    <Column title="เจ้าหน้าที่" dataIndex="staff" key="staff" />
    <Column
      title="ผลการตรวจสอบ"
      dataIndex="result"
      key="result"
      render={(result) => {
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
      }}
    />
  </Table>
);
