import React, { useState } from "react";
import { Modal, Button } from "antd";
import { CaseType } from "../pages/Main";
import FooterButton from "./FooterButton";
import UpdateCaseModal from "./UpdateCaseModal";
import UpdateMediationModal from "./UpdateMediationModal";

const CaseDetailModal = ({
  caseData,
  setCaseData,
}: {
  caseData: CaseType;
  setCaseData: (n: CaseType) => void;
}) => {
  const [showUpdateCase, setShowUpdateCase] = useState(false);
  const [showMediation, setShowMediation] = useState(false);

  return (
    <Modal
      key={caseData.data["caseID"]}
      visible={caseData.show}
      title={caseData.data["caseID"]}
      width={650}
      onCancel={() => setCaseData({ show: false, data: {} })}
      footer={[
        <FooterButton onClick={() => setShowMediation(true)} key="mediaion">
          การไกล่เกลี่ย
        </FooterButton>,
        <FooterButton onClick={() => setShowUpdateCase(true)} key="updatecase">
          อัพเดทคดี
        </FooterButton>,
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
      <UpdateCaseModal
        visible={showUpdateCase}
        setVisible={setShowUpdateCase}
        caseData={caseData}
      />
      <UpdateMediationModal
        visible={showMediation}
        setVisible={setShowMediation}
        caseData={caseData}
      />
    </Modal>
  );
};

export default CaseDetailModal;
