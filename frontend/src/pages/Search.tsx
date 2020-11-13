import { Button } from "antd";
import React, { useState } from "react";

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
      <Button type="primary" loading={state} onClick={click}>
        Click me!
      </Button>
    </div>
  );
};

export default Search;
