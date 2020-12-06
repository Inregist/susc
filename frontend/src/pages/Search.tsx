import React, { useState } from "react";
import { Form, message } from "antd";
import Navbar from "../components/Navbar";
import SearchSub from "../assets/Search-sub.png";
import { useForm } from "antd/lib/form/Form";

import axios from "axios";

const Search = () => {
  const [form] = useForm();

  const [show, setShow] = useState(false);

  const onFinish = ({ name, bank, phone }) => {
    if (!name && !bank && !phone) {
      message.error({
        content: "กรุณากรอกอย่างน้อย 1 ช่อง",
        duration: 5,
        style: { marginTop: "5vh" },
      });
      return;
    }

    axios({
      url: "https://susc-api.herokuapp.com/search",
      method: "post",
      data: {
        name,
        bank,
        phone,
      },
    }).then((res) => {
      console.log(res?.data);
    });
  };

  return (
    <div className="h-screen">
      <title>ค้นหา</title>
      <Navbar name="Search" />
      <div className="p-8">
        <div className="m-16 flex justify-center">
          <img src={SearchSub} alt="checking" />
        </div>
        <Form form={form} onFinish={onFinish}>
          <div className="text-center text-base pb-2">เลือกกรอกอย่างน้อย 1 ช่อง</div>
          <Form.Item name="name">
            <div className="flex relative items-center text-base rounded-lg border-2 border-gray-400 h-10">
              <div className="absolute rounded-lg h-10 bg-blue-900 text-white leading-10 px-2" style={{width:"5.5rem" , left:"-4px"}}>
                ชื่อ
              </div>
              <input className="pl-24 pr-2 w-full" type="text" />
            </div>
          </Form.Item>
          <Form.Item name="bank">
            <div className="flex relative items-center text-base rounded-lg border-2 border-gray-400 h-10">
              <div className="absolute rounded-lg h-10 bg-blue-900 text-white leading-10 px-2" style={{width:"5.5rem" , left:"-4px"}}>
                เลขบัญชี
              </div>
              <input className="pl-24 pr-2 w-full" type="text" />
            </div>
          </Form.Item>
          <Form.Item name="phone">
            <div className="flex relative items-center text-base rounded-lg border-2 border-gray-400 h-10">
              <div className="absolute rounded-lg w-32 h-10 bg-blue-900 text-white leading-10 px-2" style={{width:"5.5rem" , left:"-4px"}}>
                เบอร์โทร
              </div>
              <input className="pl-24 pr-2 w-full" type="text" />
            </div>
          </Form.Item>
          <div className="text-center">
            <input
              type="submit"
              className="px-4 py-2 mt-12 bg-blue-900 text-white text-xl font-medium rounded"
              value="ค้นหา"
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Search;
