import React, { useState } from "react";
import { Modal, Table } from "antd";

const UpdateMediation = () => {
  const [show, setShow] = useState(true);
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
      result: (
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          บันทึกผลการไกล่เกลี่ย
        </button>
      ),
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
    },
  ];
  return (
    <Modal
      width={800}
      visible={show}
      onCancel={() => {
        setShow(false);
      }}
      onOk={() => {
        setShow(false);
      }}
    >
      <div className="font-bold p-5">หมายเลขการไกล่เกลี่ย : C0020</div>
      <div className="flex justify-around  border-t border-gray-500 p-4">
        <Table dataSource={dataSource} columns={columns} />
      </div>
      <div className="flex justify-start  border-t border-gray-500 pt-4 pb-px pl-4 pr-4">
        <a href="./add-time/">
          <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            เพิ่มเวลานัดหมาย
          </button>
        </a>
      </div>
    </Modal>
  );
};
export default UpdateMediation;
