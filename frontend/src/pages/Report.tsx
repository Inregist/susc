import React from "react";
import Navbar from "../components/Navbar";
import { Form, Button, Radio, Input, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const Report = () => {
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <title>ร้องทุกข์</title>
      <Navbar name="ร้องทุกข์" />
      <div className="p-8">
        <Form onFinish={onFinish} wrapperCol={{ span: 56 }} layout="vertical">
          <div className="mb-4 font-semibold" style={{ fontSize: 16 }}>
            ข้อมูลผู้ร้องทุกข์
          </div>
          <Form.Item label="คำนำหน้าชื่อ" name={["reporter", "title"]} required>
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
            name={["reporter", "fname"]}
          >
            <Input placeholder="ชื่อ" />
          </Form.Item>
          <Form.Item
            label="นามสกุล"
            required
            tooltip="นามสกุลตรงนี้"
            name={["reporter", "lname"]}
          >
            <Input placeholder="นามสกุล" />
          </Form.Item>
          <Form.Item
            label="เบอร์โทรศัพท์"
            tooltip="เบอร์โทรศัพท์ตรงนี้"
            name={["reporter", "phone"]}
            rules={[{ required: true, message: "กรุณาระบุหมายเลขโทรศัพท์" }]}
          >
            <Input placeholder="เบอร์โทรศัพท์" />
          </Form.Item>
          <Form.Item
            label="อีเมล์"
            required
            tooltip="อีเมล์ตรงนี้"
            name={["reporter", "email"]}
          >
            <Input placeholder="อีเมล์" />
          </Form.Item>

          <div className="mt-16 mb-4 font-semibold" style={{ fontSize: 16 }}>
            ข้อมูลผู้ขาย
          </div>
          <Form.Item label="คำนำหน้าชื่อ" name={["suspect", "title"]} required>
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
            name={["suspect", "fname"]}
          >
            <Input placeholder="ชื่อ" />
          </Form.Item>
          <Form.Item
            label="นามสกุล"
            required
            tooltip="นามสกุลตรงนี้"
            name={["suspect", "lname"]}
          >
            <Input placeholder="นามสกุล" />
          </Form.Item>
          <Form.Item
            label="สินค้า"
            required
            tooltip="สินค้าตรงนี้"
            name="product"
          >
            <Input placeholder="สินค้า" />
          </Form.Item>
          <Form.Item label="ประเภทสินค้า" name="category">
            <Select placeholder="ประเภทสินค้า">
              <Select.Option value="a">เฟอร์นิเจอร์</Select.Option>
              <Select.Option value="b">อุปกรณ์อิเล็กทรอนิกซ์</Select.Option>
              <Select.Option value="c">ความงาม</Select.Option>
              <Select.Option value="d">เครื่องแต่งกาย</Select.Option>
              <Select.Option value="e">อาหาร</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="ช่องทางการซื้อ" name="platform">
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
            name={["suspect", "phone"]}
          >
            <Input placeholder="เบอร์โทรศัพท์" />
          </Form.Item>
          <Form.Item
            label="เลขบัญชี"
            tooltip="ไม่จำเป็นต้องกรอก"
            name={["suspect", "bank"]}
          >
            <Input placeholder="เลขบัญชี" />
          </Form.Item>
          <Form.Item label="ยอดโอน" required name="price">
            <Input placeholder="ยอดโอน" />
          </Form.Item>
          <Form.Item label="หลักฐานการโกง" required name="evidence">
            <Upload listType="picture-card" fileList={[]}>
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
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
          <Form.Item
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                background: "#072A4B",
                borderColor: "#072A4B",
                width: "130px",
                height: "46px",
                borderRadius: "8px",
              }}
              type="primary"
              htmlType="submit"
            >
              <div style={{ fontSize: 16 }}>ส่งคำร้องทุกข์</div>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Report;
