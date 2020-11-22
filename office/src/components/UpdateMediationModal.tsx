import React, { useContext, useState } from "react";
import { DatePicker, Modal, Popover, Table } from "antd";
import FooterButton from "./FooterButton";
import AddResult from "./AddResult";
import { DataContext } from "../DataContext";

const UpdateMediationModal = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: any;
}) => {
  const [showAddTime, setShowAddTime] = useState(false);
  const [updateModal, setUpdateModal] = useState<any>(false);
  const [idx, setIdx] = useState<any>({
    key: "0",
    date: "",
    result: "",
  });

  const { data, caseData, setData } = useContext(DataContext);

  const columns = [
    {
      title: "ลำดับการไกล่เกลี่ย",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "เวลานัดไกล่เกลี่ย",
      dataIndex: "date",
      key: "date",
      render: (m) => m.format("YYYY-MM-DDTHH:mm:ssZ"),
    },
    {
      title: "ผลการไกล่เกลี่ย",
      dataIndex: "result",
      key: "result",
      render: (item, i) => {
        return item ? (
          <div>{item}</div>
        ) : (
          <button
            onClick={() => {
              setIdx(i);
              setUpdateModal(true);
            }}
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

  const addMediation = (newMediation) => {
    const obj = {
      key: `${
        data.filter((d) => d.caseID === caseData.caseID)[0].medation.length + 1
      }`,
      date: newMediation,
      result: "",
    };
    const newData = data.map((d) =>
      d.caseID === caseData.caseID
        ? { ...d, medation: [...d.medation, obj] }
        : d
    );
    setData(newData);
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
      title={`หมายเลขการไกล่เกลี่ย : ${caseData["caseID"]}`}
      footer={
        <Popover
          key="mediation"
          visible={showAddTime}
          trigger="click"
          content={() => <DatePicker showTime onOk={addMediation} />}
        >
          <FooterButton onClick={() => setShowAddTime(true)} key="addmediation">
            เพิ่มเวลานัดหมาย
          </FooterButton>
        </Popover>
      }
    >
      <div className="border-gray-500 p-4">
        <Table
          pagination={{ pageSize: 5 }}
          dataSource={
            data.filter((d) => d.caseID === caseData.caseID)[0].medation
          }
          columns={columns}
        />
      </div>
      <AddResult visible={updateModal} setVisible={setUpdateModal} obj={idx} />
    </Modal>
  );
};
export default UpdateMediationModal;
