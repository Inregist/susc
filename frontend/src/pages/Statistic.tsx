import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Pie } from "react-chartjs-2";
import {
  Menu,
  Dropdown,
  Row,
  Col,
  Divider,
  Typography,
  Checkbox,
  Tabs,
} from "antd";
import { DownOutlined } from "@ant-design/icons";

const Statistic = () => {
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

  return (
    <div>
      <Navbar name="Statistic" />
      <Tabs size={"large"}>
        <Tabs.TabPane tab="Graph" key="1">
          <Chart title="Pongpang" chartData={chartData} />
          <Divider></Divider>
          <Row>
            <Col span={6}></Col>
            <Col span={6}>
              <Dropdown
                overlay={menuCategory}
                trigger={["click"]}
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Category <DownOutlined />
                </a>
              </Dropdown>
            </Col>
            <Col span={6}>
              <Dropdown
                overlay={menuPlatform}
                trigger={["click"]}
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Platform <DownOutlined />
                </a>
              </Dropdown>
            </Col>
            <Col span={6}></Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Report" key="2"></Tabs.TabPane>
      </Tabs>
    </div>
  );
};

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

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

const menuCategory = (
  <Menu>
    <Menu.Item>
      <Checkbox disabled> เลือกประเภทสินค้า (ไม่เกิน 3 ชนิด) </Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox onChange={onChange}> เครื่องสำอาง </Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox onChange={onChange}> เสื้อผ้า </Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox onChange={onChange}> เครื่องใช้ไฟฟ้า </Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox onChange={onChange}> ของใช้ในครัว </Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox onChange={onChange}> ของใช้ในสำนักงาน </Checkbox>
    </Menu.Item>
  </Menu>
);

const menuPlatform = (
  <Menu>
    <Menu.Item>
      <Checkbox disabled> เลือกแพลตฟอร์ม (ไม่เกิน 4 ชนิด) </Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox onChange={onChange}> eBay </Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox onChange={onChange}> Amazon </Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox onChange={onChange}> Twitter </Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox onChange={onChange}> Lazada </Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox onChange={onChange}> Shopee </Checkbox>
    </Menu.Item>
  </Menu>
);

const { Title } = Typography;

export default Statistic;
