export type CaseType = {
  key: string;
  caseID: string;
  operatingStatus:
    | "รับแจ้งคดีแล้ว"
    | "กำลังตรวจสอบ"
    | "ตรวจสอบเสร็จสิ้น"
    | "ปิดคดี";
  goods: string;
  reportDate: string;
  staff: string;
  result: "กำลังดำเนินการ" | "ฉ้อโกง" | "บริสุทธิ์";
  reporter: {
    name: string;
    citizenID: string;
    phone: string;
    email: string;
  };
  suspect: {
    name: string;
    citizenID: string;
    phone: string;
    email: string;
    bank: string;
  };
  mediation: {
    key: string;
    date: any;
    result: string;
  }[];
  platform;
};
