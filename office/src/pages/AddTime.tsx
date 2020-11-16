import React, { useState } from "react";
import { Modal } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTime = () => {
  const [show, setShow] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Modal
      width={320}
      visible={show}
      onCancel={() => {
        setShow(false);
      }}
      onOk={() => {
        setShow(false);
      }}
    >
      <div className="md:font-bold  h-10 text-lg flex w-full ">
        เพิ่มเวลานัดหมาย
      </div>
      <div className="p-4">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy h:mm aa"
          showTimeInput
        />
      </div>

      <div className="flex justify-start  border-t border-gray-500 pt-8 pb-px pl-4 pr-4">
        <button
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
          onClick={() => {
            setShow(false);
          }}
        >
          บันทึก
        </button>
      </div>
    </Modal>
  );
};
export default AddTime;
