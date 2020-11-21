import React, { useState } from "react";
import { DatePicker, Modal, Popover, Table } from "antd";
import { CaseType } from "../pages/Main";
import FooterButton from "./FooterButton";

const UpdateMediationModal = ({
  caseData,
  visible,
  setVisible,
}: {
  caseData: CaseType;
  visible: boolean;
  setVisible: any;
}) => {
  const [showAddTime, setShowAddTime] = useState(false);
  const [newMediation, setNewMediation] = useState<any>();
  const dataSource = [
    {
      key: "1",
      order: "1",
      time: "12/12/2563",
      result: "ชี้แจงเกี่ยวกับรายละเอียดคดี",
    },
    {
      key: "2",
      order: "2",
      time: "15/12/2563",
      result: "ผู้ร้องทุกข์เรียกร้องขอค่าชดเชย",
    },
    {
      key: "3",
      order: "3",
      time: "25/12/2563",
      result: "",
    },
  ];

  const columns = [
    {
      title: "ลำดับการไกล่เกลี่ย",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "เวลานัดไกล่เกลี่ย",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "ผลการไกล่เกลี่ย",
      dataIndex: "result",
      key: "result",
      render: (item) => {
        console.log(item);
        return item ? (
          <div>{item}</div>
        ) : (
          <button
            onClick={addMediation}
            style={{
              background: "#072A4B",
            }}
            className="ml-2 px-3 py-2 text-xs text-white rounded"
          >
            บันทึกผลการไกล่เกลี่ย
          </button>
        );
      },
    },
  ];

  const addMediation = () => {
    //add a mediation
    console.log(newMediation);
    setShowAddTime(false);
  };

  return (
    <Modal
      width={800}
      visible={visible}
      onCancel={() => {
        setVisible(false);
        setShowAddTime(false);
      }}
      footer={[
        <Popover
          key="mediation"
          visible={showAddTime}
          trigger="click"
          content={() => (
            <div>
              <DatePicker showTime onOk={setNewMediation} />
              <button
                onClick={addMediation}
                style={{
                  background: "#072A4B",
                }}
                className="ml-2 px-3 py-2 text-xs text-white rounded"
              >
                เพิ่ม
              </button>
            </div>
          )}
        >
          <FooterButton onClick={() => setShowAddTime(true)} key="addmediation">
            เพิ่มเวลานัดหมาย
          </FooterButton>
        </Popover>,
      ]}
    >
      <div className="font-bold p-5 text-xl">หมายเลขการไกล่เกลี่ย : C0020</div>
      <div className="flex justify-around  border-t border-gray-500 p-4">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </Modal>
  );
};
export default UpdateMediationModal;
