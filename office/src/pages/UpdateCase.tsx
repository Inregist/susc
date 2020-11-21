import React from "react";
import { Modal, Select, Collapse, Input, Upload, Button } from "antd";

const { Option } = Select;
const { Panel } = Collapse;

const UpdateCase = () => {
  return (
    <Modal
      title="อัพเดทคดี : C0020"
      visible={true}
      width={800}
      footer={[
        <div>
          <Button key="ok">บันทึก</Button>
          <Button key="cancel">ยกเลิก</Button>
        </div>,
      ]}
    >
      <div className="justify-between flex px-8">
        <div>
          ขั้นตอนการดำเนินงาน
          <br></br>
          <Select style={{ width: 300 }}>
            <Option value="1">รับเรื่องเรียบร้อยเเล้ว</Option>
            <Option value="2">กำลังตรวจสอบ</Option>
            <Option value="3">ตรวจสอบเเล้ว - ฉ้อโกง</Option>
            <Option value="4">ตรวจสอบเเล้ว - ไม่ฉ้อโกง</Option>
            <Option value="5">กำลังดำเนินการไกล่เกลี่ย</Option>
            <Option value="6">ปิดคดี</Option>
          </Select>
        </div>
        <div>
          ผลการตรวจสอบ
          <br></br>
          <Select style={{ width: 300 }}>
            <Option value="1">บริสุทธ์</Option>
            <Option value="2">ฉ้อโกง</Option>
            <Option value="3">รอการดำเนินการ</Option>
          </Select>
        </div>
      </div>
      <div className="pt-8 px-8">
        ข้อมูลคดี
        <br></br>
        <Collapse bordered={false} className="site-collapse-custom-collapse">
          <Panel
            header="ข้อมูลผู้ร้องทุกข์"
            key="reporter"
            className="site-collapse-custom-panel"
          >
            <div className="px-12">
              <div>ชื่อ-นามสกุล</div>
              <Input disabled defaultValue="นางสาวเกด ศิริน" />
              <div className="mt-2">เลขบัตรประจำตัวประชาชน</div>
              <Input disabled defaultValue="1124573808456" />
              <div className="mt-2">เบอร์โทรศัพท์</div>
              <Input />
              <div className="mt-2">อีเมล</div>
              <Input />
            </div>
          </Panel>
          <Panel
            header="ข้อมูลผู้ถูกร้องทุกข์"
            key="defendant"
            className="site-collapse-custom-panel"
          >
            <div className="px-12">
              <p className="mb-0">ชื่อ-นามสกุล</p>
              <Input disabled defaultValue="นายกัน ดารา" />
              <p className="mt-2 mb-0">สินค้า</p>
              <Input disabled defaultValue="เครื่องม้วนผมลวนสุดสวย" />
              <p className="mt-2 mb-0">ประเภทสินค้า</p>
              <Select style={{ width: 560 }}>
                <Option value="1">เครื่องสำอาง</Option>
                <Option value="2">เสื้อผ้า</Option>
                <Option value="3">เครื่องใช้ไฟฟ้า</Option>
                <Option value="4">ของใช้ในครัว</Option>
                <Option value="5">ขอใช้ในสำนักงาน</Option>
              </Select>
              <p className="mt-2 mb-0">ช่องทางการซื้อ</p>
              <Input />
              <p className="mt-2 mb-0">เลขบัญชี</p>
              <Input />
              <p className="mt-2 mb-0">ยอดการโอน</p>
              <Input />
              <p className="mt-2 mb-0">รายละเอียดการโอน</p>
              <Input
                disabled
                defaultValue="ผู้ขายไม่ส่งเลขติดตามการขนส่งสินค้าภายหลังจากการส่งหลักฐานการโอนเงินให้เป็นระยะเวลา 1 สัปดาห์ และผู้ขายได้ทำการบล็อคไลน์หนีไป"
              />
              <p className="mt-2 mb-0">รูปหลักฐานการโกง</p>
              <Upload listType="picture-card">
                <div>
                  {/* <PlusOutlined /> */}
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </div>
          </Panel>
        </Collapse>
      </div>
    </Modal>
  );
};
export default UpdateCase;
