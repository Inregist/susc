import React,{useState} from "react";
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
      cancelButtonProps={{ style: { display: 'none' } }}
      okButtonProps={{ style: { display: 'none' } }}
    >
      <div className="md:font-bold  h-10 text-lg flex w-full flex justify-around  border-b border-gray-500 p-0.5">
        เพิ่มเวลานัดหมาย
      </div>
      <div className="pt-12 pb-4 pl-10 pr-4 flex justify-center ">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy h:mm aa"
          showTimeInput
          
        />
      </div>

      <div className=" flex justify-center pt-8 pb-px pl-4 pr-4">
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
