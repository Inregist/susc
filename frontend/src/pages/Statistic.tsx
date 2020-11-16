import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Pie, Bar } from "react-chartjs-2";
import { Menu, Dropdown, Checkbox, Tabs, Button, Radio, List } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Statistic = () => {
  const [showCatGraph, setShowCatGraph] = useState(false);
  const [showPlatformGraph, setShowPlatformGraph] = useState(false);
  const [showCatReport, setShowCatReport] = useState(false);
  const [showPlatformReport, setShowPlatformReport] = useState(false);

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

  const [chartPieData, setChartPieData] = useState({
    labels: [
      "เครื่องสำอาง",
      "เครื่องใช้ในครัว",
      "เสื้อผ้า",
      "เครื่องใช้ไฟฟ้า",
      "ของใช้สำนักงาน",
    ],
    datasets: [
      {
        label: "Population",
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
  });

  const [chartBarData, setChartBarData] = useState({
    labels: ["Lazada", "Shopee", "Twitter", "Amazon"],
    datasets: [
      {
        label: ["เสื้อ"],
        data: [500, 150, 23, 50],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "กางเกง",
        data: [25, 48, 850, 27],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "รถยนต์",
        data: [100, 147, 30, 78],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
    ],
  });

  const menuCategory = (
    <Menu>
      <Menu.Item>
        <Checkbox disabled> เลือกประเภทสินค้า (ไม่เกิน 3 ชนิด) </Checkbox>
      </Menu.Item>
      {selectedCat.map((item) => (
        <Menu.Item key={item.name}>
          <Checkbox
            onClick={() => setShowCatGraph(true)}
            onChange={(e) => {
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
      <Menu.Item>
        <Checkbox disabled> เลือกแพลตฟอร์ม (ไม่เกิน 4 ชนิด) </Checkbox>
      </Menu.Item>
      {selectedPlatForm.map((item) => (
        <Menu.Item key={item.name}>
          <Checkbox
            onChange={(e) => {
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
    <div>
      <Navbar name="Statistic" />
      <Tabs size={"large"} centered>
        <Tabs.TabPane tab={<div>Graph</div>} key="1">
          <div className="flex flex-row">
            <Button type="text">Category</Button>
            <Button type="text">Platform</Button>
          </div>
          <ChartPie title="" chartData={chartPieData} />
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
          <ChartBar title="" chartData={chartBarData} />
          <div className="flex mb-4">
            <Radio.Group>
              <Radio value={1}>เดือน</Radio>
              <Radio value={2}>ไตรมาส</Radio>
              <Radio value={3}>ปี</Radio>
            </Radio.Group>
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
            style = {{padding: 30}}
            itemLayout="horizontal"
            dataSource={dataMock}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta title={item.title}/>
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
            position: "right",
          },
        }}
      />
    </div>
  );
};

const Graph = () => {};

export default Statistic;
