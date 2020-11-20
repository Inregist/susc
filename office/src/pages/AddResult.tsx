import React from "react";
import { Modal, Input} from "antd";
import Garbage from "../assets/garbage.png";
const AddResult = () => {
  const { TextArea } = Input;
  return (
    <Modal
      width={800}
      visible={true}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <div className=" p-4 text-xl font-bold">การไกล่เกลี่ย : C0020 ครั้งที่ 2</div>
      <div className="flex  border-t border-gray-500 pt-8 pb-4 pl-4 pr-4 font-bold">
        เวลานัดไกล่เกลี่ย
      </div>
      <div className="flex pt-px pb-1 pl-8 pr-1">15/12/2563</div>
      <div className="flex pt-8 pb-4 pl-4 pr-4 font-bold">ผลการไกล่เกลี่ย</div>
      <TextArea rows={5} />
      <div className="pt-12 pl-4 flex ">
        <div className="pr-12">
          <button className="rounded-lg bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-32">
            บันทึก
          </button>
        </div>
        <div className="pr-64">
          <button className="rounded-lg bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-32">
            ยกเลิก
          </button>
        </div>
        <div className="pl-32">
          <button className="inline-flex items-center justify-center w-10 h-10 mr-2  transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline ">
                <img src={Garbage} width="20" height="20" alt="icon" />
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default AddResult;
