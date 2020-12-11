import React, { useContext } from "react";
import { Modal, Select, Collapse, Input, Upload, Form } from "antd";
import FooterButton from "./FooterButton";
import { DataContext } from "../DataContext";
import { useForm } from "antd/lib/form/Form";

const { Option } = Select;
const { Panel } = Collapse;
const { Item } = Form;

const UpdateCaseModal = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: any;
}) => {
  const { caseData, data, setData } = useContext(DataContext);
  const [form] = useForm();

  return (
    <Modal
      title={`อัพเดทคดี : ${caseData.caseID}`}
      visible={visible}
      width={800}
      onCancel={() => setVisible(false)}
      footer={[
        <FooterButton
          onClick={() => {
            form.submit();
            setVisible(false);
          }}
          key="Ok"
        >
          บันทึก
        </FooterButton>,
        <FooterButton onClick={() => setVisible(false)} key="Cancel">
          ยกเลิก
        </FooterButton>,
      ]}
    >
      <Form
        form={form}
        initialValues={{
          operatingStatus: caseData.operatingStatus,
          result: caseData.result,
          reporter: {
            name: caseData.reporter.name,
            citizenID: caseData.reporter.citizenID,
            phone: caseData.reporter.phone,
            email: caseData.reporter.email,
          },
          suspect: {
            name: caseData.suspect.name,
            bank: caseData.suspect.bank,
          },
          goods: caseData.goods,
          platform: caseData.platform,
        }}
        onFinish={(values) => {
          const newData = data.map((d) =>
            d.caseID === caseData.caseID ? { ...d, ...values } : d
          );

          setData(newData);
        }}
      >
        <div className="justify-between flex px-8">
          <div>
            ขั้นตอนการดำเนินงาน
            <br></br>
            <Item name="operatingStatus">
              <Select style={{ width: 300 }}>
                <Option value="รับแจ้งคดีแล้ว">รับแจ้งคดีแล้ว</Option>
                <Option value="กำลังตรวจสอบ">กำลังตรวจสอบ</Option>
                <Option value="ตรวจสอบเสร็จสิ้น">ตรวจสอบเสร็จสิ้น</Option>
                <Option value="ปิดคดี">ปิดคดี</Option>
              </Select>
            </Item>
          </div>
          <div>
            ผลการตรวจสอบ
            <br></br>
            <Item name="result">
              <Select style={{ width: 300 }}>
                <Option value="กำลังดำเนินการ">กำลังดำเนินการ</Option>
                <Option value="ฉ้อโกง">ฉ้อโกง</Option>
                <Option value="บริสุทธิ์">บริสุทธิ์</Option>
              </Select>
            </Item>
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
                <Item name={["reporter", "name"]}>
                  <Input disabled />
                </Item>
                <div className="mt-2">เลขบัตรประจำตัวประชาชน</div>
                <Item name={["reporter", "citizenID"]}>
                  <Input disabled />
                </Item>
                <div className="mt-2">เบอร์โทรศัพท์</div>
                <Item name={["reporter", "phone"]}>
                  <Input />
                </Item>
                <div className="mt-2">อีเมล</div>
                <Item name={["reporter", "email"]}>
                  <Input />
                </Item>
              </div>
            </Panel>
            <Panel
              header="ข้อมูลผู้ถูกร้องทุกข์"
              key="defendant"
              className="site-collapse-custom-panel"
            >
              <div className="px-12">
                <p className="mb-0">ชื่อ-นามสกุล</p>
                <Item name={["suspect", "name"]}>
                  <Input disabled />
                </Item>
                <p className="mt-2 mb-0">สินค้า</p>
                <Item name="goods">
                  <Input disabled />
                </Item>
                {/* <p className="mt-2 mb-0">ประเภทสินค้า</p>
                <Select style={{ width: 560 }}>
                  <Option value="1">เครื่องสำอาง</Option>
                  <Option value="2">เสื้อผ้า</Option>
                  <Option value="3">เครื่องใช้ไฟฟ้า</Option>
                  <Option value="4">ของใช้ในครัว</Option>
                  <Option value="5">ขอใช้ในสำนักงาน</Option>
                </Select> */}
                <p className="mt-2 mb-0">ช่องทางการซื้อ</p>
                <Item name="platform">
                  <Input />
                </Item>
                <p className="mt-2 mb-0">เลขบัญชี</p>
                <Item name={["suspect", "bank"]}>
                  <Input />
                </Item>
                <p className="mt-2 mb-0">ยอดการโอน</p>
                <Input value={1500}/>
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
      </Form>
    </Modal>
  );
};
export default UpdateCaseModal;
