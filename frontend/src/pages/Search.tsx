import { Button } from "antd";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Search = () => {
  const [state, setState] = useState(false);

  const click = () => {
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 2000);
  };

  return (
    <div>
      <Navbar/>
      <div>
        <Button type="primary" loading={state} onClick={click}>
          Click me!
        </Button>
      



      </div>
    </div>
    
  );
};

export default Search;
