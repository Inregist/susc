import React from "react";
import Navbar from "../components/Navbar";
import { Input, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const Report = () => {
  const onChange = (e) => {
    console.log(e);
  };
  // แก้เป็น Form

  return (
    <div className="w-full">
      <Navbar name="Report" />
      Report Page
      <div className="p-8">
        <div className="mb-4">ข้อมูลผู้ร้องทุกข์</div>

        <div className="my-2">ชื่อ-นามสกุล</div>
        <Input
          placeholder="ชื่อ นามสกุล"
          allowClear
          onChange={onChange}
          suffix={
            <Tooltip title="ชื่อ-นามสุกลของผู้แจ้ง">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />

        <div className="my-2">เลขบัตรประจำตัวประชาชน</div>
        <Input
          placeholder="เลขบัตรประจำตัวประชาชน"
          allowClear
          onChange={onChange}
          suffix={
            <Tooltip title="เลขบัตรประชาชนของผู้แจ้ง">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />

        <div className="my-2">เบอร์โทรศัพท์</div>
        <Input
          placeholder="เบอร์โทรศัพท์"
          allowClear
          onChange={onChange}
          suffix={
            <Tooltip title="เบอร์โทรศัพท์ที่ติดต่อได้จริง">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />

        <div className="my-2">อีเมล์</div>
        <Input
          placeholder="อีเมล์"
          allowClear
          onChange={onChange}
          suffix={
            <Tooltip title="อีเมลล์ที่ติดต่อได้จริง">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />

        {/* --------------------------------------------------- */}

        <div className="my-4">ข้อมูลผู้ขาย</div>

        <div className="my-2">ชื่อ-นามสกุล</div>
        <Input placeholder="ชื่อ สกุล" allowClear onChange={onChange} />

        <div className="my-2">สินค้า</div>
        <Input placeholder="สินค้า" allowClear onChange={onChange} />

        <div className="my-2">ประเภทสินค้า</div>

        <div className="my-2">ช่องทางการซื้อ</div>
        <Input placeholder="  " allowClear onChange={onChange} />

        <div className="my-2">เลขบัญชี</div>
        <Input placeholder="เลขบัญชี" allowClear onChange={onChange} />

        <div className="my-2">ยอดการโอน</div>
        <Input placeholder="ยอดการโอน ฿" allowClear onChange={onChange} />

        <div className="my-2">รายละเอียดการโกง</div>
      </div>
    </div>
  );
};

export default Report;
