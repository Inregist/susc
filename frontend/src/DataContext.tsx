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
    result: "กำลังดำเนินการ",
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
    result: "กำลังดำเนินการ",
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
    result: "กำลังดำเนินการ",
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
    result: "กำลังดำเนินการ",
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
    mediation: [],
    platform: "Shopee",
  },
];

const DataProvider = ({ children }) => {
  const data = [...WarnCase, ...CheatCase];
  const [result, setResult] = useState<any>([]);
  const [caseDetail, setCaseDetail] = useState<null | CaseType>(null);
  const [input, setInput] = useState<any>({});

  return (
    <DataContext.Provider
      value={{
        data,
        result,
        setResult,
        input,
        setInput,
        caseDetail,
        setCaseDetail,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
