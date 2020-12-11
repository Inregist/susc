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
    key: "string",
    caseID: "string",
    operatingStatus: "รับแจ้งคดีแล้ว",
    goods: "string",
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
