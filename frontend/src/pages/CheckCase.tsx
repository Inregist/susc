import React from "react";
import Navbar from "../components/Navbar";
import { Button, Input,Tooltip  } from "antd";
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const CheckCase = () => {
  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div className="bg-white-300 h-screen">
      <title>ติดตามคดี</title>
      <Navbar name="ตรวจสอบ" />
      <div className="mt-48 mb-3 flex justify-center text-xl font-bold">
        กรอกเลขบัตรประจำตัวประชาชนของคุณ
      </div>
      <div className="mb-40 flex justify-center">
        <Input
          bordered
          size="large"
          placeholder="เลขบัตรประจำตัวประชาชน"
          allowClear
          onChange={onChange}
          style={{ width: "340px" }}
          prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="กรอกเลขบัตรประชาชนเพื่อติดตามคดี">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
        />
      </div>
      <div className=" flex justify-center">
        <Button
          type="primary"
          size="large"
          style={{
            background: "#072A4B",
            borderColor: "#072A4B",
            width: "180px",
            height: "56px",
            borderRadius: "8px",
          }}
        >
          ยืนยัน
        </Button>
      </div>
    </div>
  );
};

export default CheckCase;
