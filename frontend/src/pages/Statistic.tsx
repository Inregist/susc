import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Pie } from "react-chartjs-2";
import { Menu, Dropdown, Checkbox, Tabs } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Statistic = () => {
  const [showCat, setShowCat] = useState(false);
  const [showPlatform, setShowPlatform] = useState(false);

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

  const [chartData, setChartData] = useState({
    labels: [
      "Boston",
      "Worcester",
      "Springfield",
      "Lowell",
      "Cambridge",
      "New Bedford",
    ],
    datasets: [
      {
        label: "Population",
        data: [617594, 181045, 153060, 106519, 105162, 95072],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
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
            onClick={() => setShowCat(true)}
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
          <Chart title="Pongpang" chartData={chartData} />
          <div className="flex justify-around items-center border-t border-gray-500 mt-10 h-12">
            <Dropdown
              visible={showCat}
              onVisibleChange={setShowCat}
              overlay={menuCategory}
            >
              <div>
                Category <DownOutlined />
              </div>
            </Dropdown>
            <Dropdown
              visible={showPlatform}
              overlay={menuPlatform}
              onVisibleChange={setShowPlatform}
            >
              <div>
                Platform <DownOutlined />
              </div>
            </Dropdown>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Report" key="2"></Tabs.TabPane>
      </Tabs>
    </div>
  );
};

const Chart = ({ chartData, title }) => {
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

const Graph = () => {};

export default Statistic;
