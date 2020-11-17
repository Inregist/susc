import React from "react";
import { Modal, Input, Upload, Button } from "antd";

const MainpageMycaseDetail = () => {
  return (
    <div>
      <Modal
        title="C0020"
        visible={true}
        width={800}
        footer={[
          <div>
            <Button
              style={{
                background: "#072A4B",
                borderColor: "#072A4B",
                width: "130px",
                height: "46px",
                borderRadius: "8px",
              }}
              key="1"
            >
              <div className="text-white">การไกล่เกลี่ย</div>
            </Button>
            <Button
              style={{
                background: "#072A4B",
                borderColor: "#072A4B",
                width: "130px",
                height: "46px",
                borderRadius: "8px",
              }}
              key="2"
            >
              <div className="text-white">อัพเดทคดี</div>
            </Button>
          </div>,
        ]}
      >
        <div className="flex justify-between px-8">
          <div className="font-bold text-base">
            <p>ผู้ร้องทุกข์</p>
            <div className="pl-10 font-normal">
              <p className="mb-0">ชื่อ-นามสกุล</p>
              <p>นางสาวเกด ศิริน</p>
              <p className="mb-0">เลขบัตรประจำตัวประชาชน</p>
              <p>1124573808456</p>
              <p className="mb-0">เบอร์โทรศัพท์</p>
              <p>0846652758</p>
              <p className="mb-0">อีเมล</p>
              <p>katy.katesirin@gmail.com</p>
            </div>
          </div>

          <div className="font-bold text-base pr-10">
            <p>ผู้ถูกร้องทุกข์</p>
            <div className="pl-10 font-normal">
              <p className="mb-0">ชื่อ-นามสกุล</p>
              <p>นายกัน ดารา</p>
              <p className="mb-0">เลขบัตรประจำตัวประชาชน</p>
              <p>1187645609435</p>
              <p className="mb-0">เบอร์โทรศัพท์</p>
              <p>0915567834</p>
              <p className="mb-0">อีเมล</p>
              <p>gun.ginnie@gmail.com</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MainpageMycaseDetail;
