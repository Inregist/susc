import React, { createContext, useState } from "react";
import { CaseType } from "./pages/Main";

export const DataContext = createContext<{
  data: CaseType[];
  setData: (b) => void;
  caseData: CaseType;
  setCaseData: (b) => void;
}>({
  data: [],
  setData: () => {},
  caseData: {
    key: "0",
    caseID: "",
    operatingStatus: "รับแจ้งคดีแล้ว",
    goods: "",
    reportDate: "",
    staff: "",
    result: "กำลังดำเนินการ",
    reporter: {
      name: "",
      citizenID: "",
      phone: "",
      email: "",
    },
    suspect: {
      name: "",
      citizenID: "",
      phone: "",
      email: "",
      bank: "",
    },
    medation: [],
    platform: "",
  },
  setCaseData: () => {},
});

const DataProvider = ({ children }) => {
  const [caseData, setCaseData] = useState<CaseType>({
    key: "0",
    caseID: "",
    operatingStatus: "รับแจ้งคดีแล้ว",
    goods: "",
    reportDate: "",
    staff: "",
    result: "กำลังดำเนินการ",
    reporter: {
      name: "",
      citizenID: "",
      phone: "",
      email: "",
    },
    suspect: {
      name: "",
      citizenID: "",
      phone: "",
      email: "",
      bank: "",
    },
    medation: [
      {
        key: "",
        date: "",
        result: "",
      },
    ],
    platform: "",
  });
  const [data, setData] = useState<CaseType[]>(
    Array(20)
      .fill(0)
      .map((d, i) => ({
        key: `${i}`,
        caseID: `C${i.toString().padStart(3, "0")}`,
        operatingStatus: {
          0: "รับแจ้งคดีแล้ว",
          1: "กำลังตรวจสอบ",
          2: "ตรวจสอบเสร็จสิ้น",
          3: "ปิดคดี",
        }[Math.floor(Math.random() * 4)],
        goods: "กางเกง",
        reportDate: "12.08.2020",
        staff: { 0: "ทำงานหนักมาก", 1: "ฉันไม่ทำงาน" }[
          Math.floor(Math.random() * 2)
        ],
        result: { 0: "กำลังดำเนินการ", 1: "ฉ้อโกง", 2: "บริสุทธิ์" }[
          Math.floor(Math.random() * 3)
        ],
        reporter: {
          name: "นางสาวเกด ศิริน",
          citizenID: "1124573808888",
          phone: "0854566548",
          email: "kate@kate.com",
        },
        suspect: {
          name: "นายกัน ดารา",
          citizenID: "1187648889435",
          phone: "0854568528",
          email: "kan@kan.com",
          bank: "12-123-1254-6",
        },
        medation: [],
        platform: "lazada",
      }))
  );

  return (
    <DataContext.Provider value={{ data, setData, caseData, setCaseData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;