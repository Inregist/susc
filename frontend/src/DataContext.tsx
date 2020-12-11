import React, { createContext, useState } from "react";
import { CaseType } from "./components/CaseType";

export const DataContext = createContext<any>({});

const WarnCase: CaseType[] = [
  {
    key: "1",
    caseID: "C01",
    operatingStatus: "ปิดคดี",
    goods: "กางเกง",
    reportDate: "string",
    staff: "string",
    result: "ฉ้อโกง",
    reporter: {
      name: "string",
      citizenID: "string",
      phone: "string",
      email: "string",
    },
    suspect: {
      name: "string",
      citizenID: "string",
      phone: "string",
      email: "string",
      bank: "string",
    },
    mediation: [
      {
        key: "string",
        date: "any",
        result: "string",
      },
    ],
    platform: "string",
  },
];

const CheatCase: CaseType[] = [
  {
    key: "1",
    caseID: "C004",
    operatingStatus: "ปิดคดี",
    goods: "กางเกง",
    reportDate: "12/08/2020",
    staff: "ทำงานหนักมาก",
    result: "ฉ้อโกง",
    reporter: {
      name: "นายสาวเกด ศิริน",
      citizenID: "",
      phone: "0888888888",
      email: "khondee@mail.ddd.com",
    },
    suspect: {
      name: "นายแอบโกง ในหลืบ",
      citizenID: "",
      phone: "0611111111",
      email: "cheat555@yahoolo.com",
      bank: "12-123-1254-6",
    },
    mediation: [
      {
        key: "",
        date: "",
        result: "",
      },
    ],
    platform: "Line",
  },
  {
    key: "2",
    caseID: "C016",
    operatingStatus: "ปิดคดี",
    goods: "กางเกง",
    reportDate: "04/08/2020",
    staff: "ฉันไม่ทำงาน",
    result: "ฉ้อโกง",
    reporter: {
      name: "นายสาวเกด ศิริน",
      citizenID: "",
      phone: "0888888888",
      email: "khondee@mail.ddd.com",
    },
    suspect: {
      name: "นางสาวแอบขาย จ้า",
      citizenID: "",
      phone: "0666666666",
      email: "appkaija@yahoolo.com",
      bank: "12-123-1212-1",
    },
    mediation: [
      {
        key: "",
        date: "",
        result: "",
      },
    ],
    platform: "Shopee",
  },
  {
    key: "3",
    caseID: "C024",
    operatingStatus: "ปิดคดี",
    goods: "กางเกง",
    reportDate: "01/08/2020",
    staff: "ทำงานหนักมาก",
    result: "ฉ้อโกง",
    reporter: {
      name: "นายสาวเกด ศิริน",
      citizenID: "",
      phone: "0888888888",
      email: "khondee@mail.ddd.com",
    },
    suspect: {
      name: "นายแอบโกง ในหลืบ",
      citizenID: "",
      phone: "0611111111",
      email: "cheat555@yahoolo.com",
      bank: "12-123-1254-6",
    },
    mediation: [
      {
        key: "",
        date: "",
        result: "",
      },
    ],
    platform: "Shopee",
  },
];

const DataProvider = ({ children }) => {
  const [result, setResult] = useState<any>({});
  const [input, setInput] = useState<any>({});

  console.log(WarnCase, CheatCase);
  return (
    <DataContext.Provider value={{ result, setResult, input, setInput }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
