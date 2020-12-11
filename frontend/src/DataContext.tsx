import React, { createContext, useState } from "react";
import { CaseType } from "./components/CaseType";

export const DataContext = createContext<any>({});

const WarnCase: CaseType[] = [
  {
    key: "1",
    caseID: "C01",
    operatingStatus: "ปิดคดี",
    goods: "ตุ๊กตาสิงโตแสนน่ารัก",
    reportDate: "10/08/2020",
    staff: "นายทำงาน หนักมาก",
    result: "ฉ้อโกง",
    reporter: {
      name: "นางสาวน้ำปูน จิตตา",
      citizenID: "4495235847422",
      phone: "0955550209",
      email: "nampoonnii@gmail.com",
    },
    suspect: {
      name: "นายแอบ มีข้อสงสัย",
      citizenID: "6351472185214",
      phone: "0855580467",
      email: "lazysunday01@hotmail.com",
      bank: "154-9-78856-3",
    },
    mediation: [],
    platform: "Twitter",
  },
  {
    key: "2",
    caseID: "C05",
    operatingStatus: "กำลังตรวจสอบ",
    goods: "เครื่องดูดฝุ่น",
    reportDate: "14/07/2019",
    staff: "นายหยุด ทำงานก่อน",
    result: "ฉ้อโกง",
    reporter: {
      name: "นางสาวเบญจาง คะประดิษฐ์",
      citizenID: "4002476630040",
      phone: "0655567420",
      email: "benji_eiei@yahoo.com",
    },
    suspect: {
      name: "นายแอบโกง ในไหน",
      citizenID: "6243165069244",
      phone: "0855540449",
      email: "cheatyboy007@hotmail.com",
      bank: "257-4-98963-1",
    },
    mediation: [],
    platform: "Lazada",
  },
  {
    key: "3",
    caseID: "C09",
    operatingStatus: "รับแจ้งคดีแล้ว",
    goods: "เสื้อลายดอกไม้สุดสวย",
    reportDate: "17/11/2020",
    staff: "นายหยุด ทำงานก่อน",
    result: "ฉ้อโกง",
    reporter: {
      name: "นางสาวการะเกด ศุรางค์",
      citizenID: "8586915727150",
      phone: "0955510109",
      email: "karakate_boom@hotmail.com",
    },
    suspect: {
      name: "นายแอบโกง ในไหน",
      citizenID: "6243165069244",
      phone: "0855540449",
      email: "cheatyboy007@hotmail.com",
      bank: "257-4-98963-1",
    },
    mediation: [],
    platform: "Lazada",
  },
  {
    key: "4",
    caseID: "C13",
    operatingStatus: "รับแจ้งคดีแล้ว",
    goods: "ตู้เสื้อผ้าเคลื่อนที่ได้",
    reportDate: "11/09/2020",
    staff: "นายทำงาน หนักมาก",
    result: "ฉ้อโกง",
    reporter: {
      name: "นายกรรณกิต พงศ์ดารา",
      citizenID: "1571481657805",
      phone: "0655541067",
      email: "kankit@hotmail.com",
    },
    suspect: {
      name: "นายแอบ มีข้อสงสัย",
      citizenID: "6351472185214",
      phone: "0855580467",
      email: "lazysunday01@hotmail.com",
      bank: "154-9-78856-3",
    },
    mediation: [],
    platform: "Twitter",
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
