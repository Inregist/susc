import React from "react";
import Navbar from "../components/Navbar";
import { Form, Button, Radio, Input, Select, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const Report = () => {
  const layout = {
    wrapperCol: { span: 56 },
  };

  const { TextArea } = Input;

  return (
    <div>
      <Navbar name="ร้องทุกข์" />
      <div className="p-8">
        <Form {...layout} layout="vertical">
          <div className="mb-4 font-semibold" style={{ fontSize: 18 }}>
            ข้อมูลผู้ร้องทุกข์
          </div>
          <Form.Item label="คำนำหน้าชื่อ" name="nameTitleCon" required>
            <Radio.Group>
              <Radio.Button value="1">นาย</Radio.Button>
              <Radio.Button value="2">นาง</Radio.Button>
              <Radio.Button value="3">นางสาว</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="ชื่อ"
            required
            tooltip="มีนามสกุลข้างล่าง"
            name="fNameCon"
          >
            <Input placeholder="ชื่อ" />
          </Form.Item>
          <Form.Item
            label="นามสกุล"
            required
            tooltip="นามสกุลตรงนี้"
            name="lNameCon"
          >
            <Input placeholder="นามสกุล" />
          </Form.Item>
          <Form.Item
            label="เบอร์โทรศัพท์"
            required
            tooltip="เบอร์โทรศัพท์ตรงนี้"
            name="phoneNoCon"
          >
            <Input placeholder="เบอร์โทรศัพท์" />
          </Form.Item>
          <Form.Item
            label="อีเมล์"
            required
            tooltip="อีเมล์ตรงนี้"
            name="emailCon"
          >
            <Input placeholder="อีเมล์" />
          </Form.Item>

          <div className="mb-4 font-semibold" style={{ fontSize: 18 }}>
            ข้อมูลผู้ขาย
          </div>
          <Form.Item label="คำนำหน้าชื่อ" name="nameTitleCon" required>
            <Radio.Group>
              <Radio.Button value="1">นาย</Radio.Button>
              <Radio.Button value="2">นาง</Radio.Button>
              <Radio.Button value="3">นางสาว</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="ชื่อ"
            required
            tooltip="มีนามสกุลข้างล่าง"
            name="fNameCon"
          >
            <Input placeholder="ชื่อ" />
          </Form.Item>
          <Form.Item
            label="นามสกุล"
            required
            tooltip="นามสกุลตรงนี้"
            name="lNameCon"
          >
            <Input placeholder="นามสกุล" />
          </Form.Item>
          <Form.Item
            label="สินค้า"
            required
            tooltip="สินค้าตรงนี้"
            name="lNameCon"
          >
            <Input placeholder="สินค้า" />
          </Form.Item>
          <Form.Item label="ประเภทสินค้า" name="itemCate">
            <Select placeholder="ประเภทสินค้า">
              <Select.Option value="a">เฟอร์นิเจอร์</Select.Option>
              <Select.Option value="b">อุปกรณ์อิเล็กทรอนิกซ์</Select.Option>
              <Select.Option value="c">ความงาม</Select.Option>
              <Select.Option value="d">เครื่องแต่งกาย</Select.Option>
              <Select.Option value="e">อาหาร</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="ช่องทางการซื้อ" name="platformCate">
            <Select placeholder="ช่องทางการซื้อ">
              <Select.Option value="Lazada">Lazada</Select.Option>
              <Select.Option value="Shopee">Shopee</Select.Option>
              <Select.Option value="Facebook">Facebook</Select.Option>
              <Select.Option value="Line">Line</Select.Option>
              <Select.Option value="Offline">Offline</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="เบอร์โทรศัพท์"
            tooltip="ไม่จำเป็นต้องกรอก"
            name="phoneNoCon"
          >
            <Input placeholder="เบอร์โทรศัพท์" />
          </Form.Item>
          <Form.Item
            label="เลขบัญชี"
            tooltip="ไม่จำเป็นต้องกรอก"
            name="emailCon"
          >
            <Input placeholder="เลขบัญชี" />
          </Form.Item>
          <Form.Item label="ยอดโอน" required name="emailCon">
            <Input placeholder="ยอดโอน" />
          </Form.Item>
          <Form.Item label="หลักฐานการโกง" required name="pic">
            <Upload >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="รายละเอียดการโกง" required name="detail">
            <TextArea
              placeholder="รายละเอียดการโกง"
              showCount
              maxLength={800}
              autoSize={{ minRows: 2, maxRows: 6 }}
            />
          </Form.Item>
          
        </Form>
      </div>
    </div>
  );
};

export default Report;
