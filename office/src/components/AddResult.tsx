import React, { useContext, useState } from "react";
import { Modal, Input } from "antd";
import Garbage from "../assets/garbage.png";
import FooterButton from "./FooterButton";
import { DataContext } from "../DataContext";
const AddResult = ({
  obj,
  visible,
  setVisible,
}: {
  obj: any;
  visible: boolean;
  setVisible: any;
}) => {
  const { TextArea } = Input;

  const [result, setResult] = useState("");

  const { data, setData, caseData } = useContext(DataContext);
  return (
    <Modal
      width={800}
      visible={visible}
      title={`การไกล่เกลี่ย : ${caseData.caseID} ครั้งที่ ${obj.key}`}
      footer={
        <div className="flex justify-between">
          <button className="inline-flex items-center justify-center w-10 h-10 mr-2  transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline ">
            <img src={Garbage} width="20" height="20" alt="icon" />
          </button>
          <div>
            <FooterButton
              onClick={() => {
                const newData = data.map((d) =>
                  d.caseID === caseData.caseID
                    ? {
                        ...d,
                        medation: d.medation.map((m) =>
                          m.key === obj.key
                            ? {
                                ...m,
                                result,
                              }
                            : m
                        ),
                      }
                    : d
                );

                setData(newData);

                setVisible(false);
              }}
            >
              บันทึก
            </FooterButton>
            <FooterButton onClick={() => setVisible(false)}>
              ยกเลิก
            </FooterButton>
            ,
          </div>
        </div>
      }
      onCancel={() => setVisible(false)}
      onOk={() => setVisible(false)}
    >
      <div className="font-bold">
        เวลานัดไกล่เกลี่ย:{" "}
        {obj.date ? obj.date.format("YYYY-MM-DDTHH:mm:ssZ") : ""}
      </div>
      <div className="font-bold pt-4">
        ผลการไกล่เกลี่ย: <br />
        <TextArea onChange={(e) => setResult(e.target.value)} rows={5} />
      </div>
    </Modal>
  );
};
export default AddResult;
