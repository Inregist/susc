import { Checkbox, Dropdown, Menu, Table, Tabs, Tag } from "antd";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { DownOutlined } from "@ant-design/icons";
import Column from "antd/lib/table/Column";
import CaseDetailModal from "../components/CaseDetailModal";
import { DataContext } from "../DataContext";
import { useHistory } from "react-router-dom";

export type CaseType = {
  key: string;
  caseID: string;
  operatingStatus:
    | "รับแจ้งคดีแล้ว"
    | "กำลังตรวจสอบ"
    | "ตรวจสอบเสร็จสิ้น"
    | "ปิดคดี";
  goods: string;
  reportDate: string;
  staff: string;
  result: "กำลังดำเนินการ" | "ฉ้อโกง" | "บริสุทธิ์";
  reporter: {
    name: string;
    citizenID: string;
    phone: string;
    email: string;
  };
  suspect: {
    name: string;
    citizenID: string;
    phone: string;
    email: string;
    bank: string;
  };
  mediation: {
    key: string;
    date: any;
    result: string;
  }[];
  platform;
};

const Main = () => {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("isLogin")) history.push("/login");
  });

  const [show, setShow] = useState(false);
  const [showOperationgStatus, setShowOperationgStatus] = useState(false);

  const { data, caseData, setCaseData } = useContext(DataContext);
  useEffect(() => {
    if (!caseData.caseID) return;
    setCaseData(data.filter((d) => d.caseID === caseData.caseID)[0]);
  }, [data, caseData.caseID, setCaseData]);

  const [selectedOperationgStatus, setSelectedOperationgStatus] = useState([
    { name: "รับแจ้งคดีแล้ว", check: true },
    { name: "กำลังตรวจสอบ", check: true },
    { name: "ตรวจสอบเสร็จสิ้น", check: true },
    { name: "ปิดคดี", check: true },
  ]);

  const menuOperatingStatus = (
    <Menu>
      <Menu.Item>เลือกสถานะการดำเนินงาน</Menu.Item>
      {selectedOperationgStatus.map((item) => (
        <Menu.Item key={item.name}>
          <Checkbox
            checked={item.check}
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

  return (
    <div style={{ background: "#ffffff" }} className="h-screen">
      <Navbar />
      <div style={{ padding: "32px", marginLeft: "56px", marginRight: "56px" }}>
        <Tabs size={"large"} tabBarExtraContent={operations}>
          <Tabs.TabPane tab={<div className="mx-3">คดีของฉัน</div>} key="1">
            <CaseTable
              data={data
                .filter((d) =>
                  selectedOperationgStatus
                    .filter((o) => o.check)
                    .map((o) => o.name)
                    .includes(d.operatingStatus)
                )
                .filter((d) => d.staff === "ทำงานหนักมาก")}
              setCaseData={setCaseData}
              setShow={setShow}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<div className="mx-3">คดีทั้งหมด</div>} key="2">
            <CaseTable
              data={data.filter((d) =>
                selectedOperationgStatus
                  .filter((o) => o.check)
                  .map((o) => o.name)
                  .includes(d.operatingStatus)
              )}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
      <CaseDetailModal visible={show} setVisible={setShow} />
    </div>
  );
};

export default Main;

const CaseTable = ({
  data,
  setCaseData = (n: CaseType) => {},
  setShow = (n) => {},
}) => (
  <Table
    onRow={(rec, idx) => ({
      onClick: () => {
        setCaseData(rec);
        setShow(true);
      },
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
