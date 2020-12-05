import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Pie, Bar } from "react-chartjs-2";
import { Menu, Dropdown, Checkbox, Tabs, Button, Radio, List } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Statistic = () => {
  const [showCatGraph, setShowCatGraph] = useState(false);
  const [showPlatformGraph, setShowPlatformGraph] = useState(false);
  const [showCatReport, setShowCatReport] = useState(false);
  const [showPlatformReport, setShowPlatformReport] = useState(false);
  const [pieDisplay, setPieDisplay] = useState("cat");
  const [barDisplay, setBarDisplay] = useState("month");

  const dataMock = [
    {
      title: "ชื่อ",
      value: "จำนวนครั้งที่ถูกแจ้ง",
    },
    {
      title: "นางป๋อง แป๋ง",
      value: 100,
    },
    {
      title: "นางสาวเกด ดาดาจิ",
      value: 50,
    },
    {
      title: "นางสาวน้ำปูน จิจิดา",
      value: 30,
    },
    {
      title: "นายทีปจิระ งามภักดี",
      value: 30,
    },
  ];

  const [selectedCat, setSelectedCat] = useState([
    { name: "เครื่องสำอาง", check: false },
    { name: "เสื้อผ้า", check: false },
    { name: "เครื่องใช้ไฟฟ้า", check: false },
    { name: "ของใช้ในครัว", check: false },
    { name: "ของใช้ในสำนักงาน", check: false },
  ]);
  const [selectedPlatForm, setSelectedPlatForm] = useState([
    { name: "eBay", check: false },
    { name: "Amazon", check: false },
    { name: "Twitter", check: false },
    { name: "Lazada", check: false },
    { name: "Shopee", check: false },
  ]);

  const chartPieDataCat = {
    labels: [
      "เครื่องสำอาง",
      "เครื่องใช้ในครัว",
      "เสื้อผ้า",
      "เครื่องใช้ไฟฟ้า",
      "ของใช้สำนักงาน",
    ],
    datasets: [
      {
        label: "Category",
        data: [617594, 181045, 153060, 106519, 105162],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  const chartPieDataPlat = {
    labels: ["Lazada", "Amazon", "Shopee", "Twitter", "eBay"],
    datasets: [
      {
        label: "Platform",
        data: [1, 1, 1, 5, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  const chartBarDataMonth = {
    labels: ["eBay", "Amazon", "Lazada", "Twitter", "Shopee"],
    datasets: [
      {
        label: ["เครื่องสำอาง"],
        data: [50, 150, 23, 50, 150],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "เสื้อผ้า",
        data: [25, 48, 250, 27, 114],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "เครื่องใช้ไฟฟ้า",
        data: [100, 147, 30, 78, 50],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
      {
        label: "ของใช้ในครัว",
        data: [50, 127, 10, 98, 46],
        backgroundColor: "rgba(255, 158, 86, 0.6)",
      },
      {
        label: "ของใช้ในสำนักงาน",
        data: [100, 45, 90, 48, 75],
        backgroundColor: "rgba(255, 127, 74, 0.6)",
      },
    ],
  };

  const chartBarDataQuarter = {
    labels: ["eBay", "Amazon", "Lazada", "Twitter", "Shopee"],
    datasets: [
      {
        label: ["เครื่องสำอาง"],
        data: [250, 100, 13, 50, 150],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "เสื้อผ้า",
        data: [25, 48, 850, 57, 114],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "เครื่องใช้ไฟฟ้า",
        data: [100, 167, 30, 78, 50],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
      {
        label: "ของใช้ในครัว",
        data: [50, 127, 10, 78, 46],
        backgroundColor: "rgba(255, 158, 86, 0.6)",
      },
      {
        label: "ของใช้ในสำนักงาน",
        data: [100, 46, 100, 41, 75],
        backgroundColor: "rgba(255, 127, 74, 0.6)",
      },
    ],
  };

  const chartBarDataYear = {
    labels: ["eBay", "Amazon", "Lazada", "Twitter", "Shopee"],
    datasets: [
      {
        label: ["เครื่องสำอาง"],
        data: [100, 150, 23, 50, 190],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "เสื้อผ้า",
        data: [25, 48, 880, 37, 114],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "เครื่องใช้ไฟฟ้า",
        data: [100, 177, 30, 78, 50],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
      {
        label: "ของใช้ในครัว",
        data: [50, 127, 15, 98, 46],
        backgroundColor: "rgba(255, 158, 86, 0.6)",
      },
      {
        label: "ของใช้ในสำนักงาน",
        data: [190, 45, 90, 69, 75],
        backgroundColor: "rgba(255, 127, 74, 0.6)",
      },
    ],
  };

  const menuCategory = (
    <Menu>
      <Menu.Item>เลือกประเภทสินค้า (ไม่เกิน 3 ชนิด)</Menu.Item>
      {selectedCat.map((item) => (
        <Menu.Item key={item.name}>
          <Checkbox
            checked={selectedCat.filter((c) => c.name === item.name)[0].check}
            onClick={() => setShowCatGraph(true)}
            onChange={(e) => {
              const checkCnt = selectedCat.reduce(
                (acc, s) => (s.check ? acc + 1 : acc),
                0
              );
              if (checkCnt >= 3 && e.target.checked) return;
              const newSelected: any = selectedCat.map(
                (cat: { name: string; check: boolean }) => {
                  return {
                    name: cat.name,
                    check:
                      cat.name === item.name ? e.target.checked : cat.check,
                  };
                }
              );
              setSelectedCat(newSelected);
            }}
          >
            {item.name}
          </Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );

  const menuPlatform = (
    <Menu>
      <Menu.Item>เลือกแพลตฟอร์ม (ไม่เกิน 4 ชนิด)</Menu.Item>
      {selectedPlatForm.map((item) => (
        <Menu.Item key={item.name}>
          <Checkbox
            checked={
              selectedPlatForm.filter((c) => c.name === item.name)[0].check
            }
            onChange={(e) => {
              const checkCnt = selectedPlatForm.reduce(
                (acc, s) => (s.check ? acc + 1 : acc),
                0
              );
              if (checkCnt >= 3 && e.target.checked) return;
              const newSelected: any = selectedPlatForm.map(
                (cat: { name: string; check: boolean }) => {
                  return {
                    name: cat.name,
                    check:
                      cat.name === item.name ? e.target.checked : cat.check,
                  };
                }
              );
              setSelectedPlatForm(newSelected);
            }}
          >
            {item.name}
          </Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="h-screen">
      <title>สถิติ</title>
      <Navbar name="Statistic" />
      <Tabs size={"large"} centered>
        <Tabs.TabPane tab="Graph" key="1">
          <div className="flex justify-center">
            <Radio.Group
              onChange={(e) => {
                setPieDisplay(e.target.value);
              }}
            >
              <Radio.Button value="cat">Category</Radio.Button>
              <Radio.Button value="plat">Platform</Radio.Button>
            </Radio.Group>
          </div>
          <ChartPie
            title=""
            chartData={
              pieDisplay === "cat" ? chartPieDataCat : chartPieDataPlat
            }
          />
          <div className="flex justify-around items-center border-t border-gray-500 mt-10 h-12">
            <Dropdown
              visible={showCatGraph}
              onVisibleChange={setShowCatGraph}
              overlay={menuCategory}
              placement="bottomCenter"
            >
              <div>
                Category <DownOutlined />
              </div>
            </Dropdown>
            <Dropdown
              visible={showPlatformGraph}
              overlay={menuPlatform}
              onVisibleChange={setShowPlatformGraph}
              placement="bottomCenter"
            >
              <div>
                Platform <DownOutlined />
              </div>
            </Dropdown>
          </div>
          <div className="px-4">
            <ChartBar
              title=""
              chartData={(() => {
                const data =
                  barDisplay === "year"
                    ? chartBarDataYear
                    : barDisplay === "month"
                    ? chartBarDataMonth
                    : barDisplay === "quarter"
                    ? chartBarDataQuarter
                    : {};
                return data;
              })()}
            />
            <div className="flex mb-4 justify-center">
              <Radio.Group
                defaultValue={"month"}
                onChange={(e) => {
                  setBarDisplay(e.target.value);
                }}
              >
                <Radio value="month">เดือน</Radio>
                <Radio value="quarter">ไตรมาส</Radio>
                <Radio value="year">ปี</Radio>
              </Radio.Group>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Report" key="2">
          <div className="flex justify-around items-center border-t border-gray-200 mt-5 h-10">
            <Dropdown
              visible={showCatReport}
              onVisibleChange={setShowCatReport}
              overlay={menuCategory}
              placement="bottomCenter"
            >
              <div>
                Category <DownOutlined />
              </div>
            </Dropdown>
            <Dropdown
              visible={showPlatformReport}
              overlay={menuPlatform}
              onVisibleChange={setShowPlatformReport}
              placement="bottomCenter"
            >
              <div>
                Platform <DownOutlined />
              </div>
            </Dropdown>
          </div>
          <List
            style={{ padding: 30 }}
            itemLayout="horizontal"
            dataSource={dataMock}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta title={item.title} />
                <div>{item.value}</div>
              </List.Item>
            )}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

const ChartPie = ({ chartData, title }) => {
  return (
    <div className="chart">
      <Pie
        data={chartData}
        options={{
          title: {
            display: true,
            text: title,
          },
          legend: {
            display: true,
            position: "right",
            labels: {
              boxWidth: 20,
              fontSize: 10,
            },
          },
        }}
      />
    </div>
  );
};

const ChartBar = ({ chartData, title }) => {
  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: title,
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              boxWidth: 10,
              fontSize: 8,
            },
          },
        }}
      />
    </div>
  );
};

export default Statistic;
