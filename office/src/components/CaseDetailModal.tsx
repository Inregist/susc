import React, { useContext, useState } from "react";
import { Modal } from "antd";
import FooterButton from "./FooterButton";
import UpdateCaseModal from "./UpdateCaseModal";
import UpdateMediationModal from "./UpdateMediationModal";
import { DataContext } from "../DataContext";

const CaseDetailModal = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: (n: boolean) => void;
}) => {
  const [showUpdateCase, setShowUpdateCase] = useState(false);
  const [showMediation, setShowMediation] = useState(false);

  const { caseData } = useContext(DataContext);

  return (
    <Modal
      key={caseData.caseID}
      visible={visible}
      title={caseData.caseID}
      width={800}
      onCancel={() => setVisible(false)}
      footer={[
        <FooterButton onClick={() => setShowMediation(true)} key="mediaion">
          การไกล่เกลี่ย
        </FooterButton>,
        <FooterButton onClick={() => setShowUpdateCase(true)} key="updatecase">
          อัพเดทคดี
        </FooterButton>,
      ]}
    >
      <div className="flex justify-around px-8">
        <div className="font-semibold text-lg">
          <p>ผู้ร้องทุกข์</p>
          <div className="pl-5 font-normal text-base">
            <p className="mb-0 mt-6">ชื่อ-นามสกุล</p>
            <p>{caseData.reporter.name}</p>
            <p className="mb-0 mt-2">เลขบัตรประจำตัวประชาชน</p>
            <p>{caseData.reporter.citizenID}</p>
            <p className="mb-0 mt-2">เบอร์โทรศัพท์</p>
            <p>{caseData.reporter.phone}</p>
            <p className="mb-0 mt-2">อีเมล</p>
            <p>{caseData.reporter.email}</p>
          </div>
        </div>

        <div className="font-semibold text-lg" style={{ paddingRight: "60px" }}>
          <p>ผู้ถูกร้องทุกข์</p>
          <div className="pl-5 font-normal text-base">
            <p className="mb-0 mt-6">ชื่อ-นามสกุล</p>
            <p>{caseData.suspect.name}</p>
            <p className="mb-0 mt-2">เลขบัตรประจำตัวประชาชน</p>
            <p>{caseData.suspect.citizenID}</p>
            <p className="mb-0 mt-2">เบอร์โทรศัพท์</p>
            <p>{caseData.suspect.phone}</p>
            <p className="mb-0 mt-2">อีเมล</p>
            <p>{caseData.suspect.email}</p>
          </div>
        </div>
      </div>
      <UpdateCaseModal
        visible={showUpdateCase}
        setVisible={setShowUpdateCase}
      />
      <UpdateMediationModal
        visible={showMediation}
        setVisible={setShowMediation}
      />
    </Modal>
  );
};

export default CaseDetailModal;
