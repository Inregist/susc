import React, { createContext, useState } from "react";

export const DataContext = createContext<any>({});

const DataProvider = ({ children }) => {
  const [result, setResult] = useState<any>({});
  const [input, setInput] = useState<any>({});
  return (
    <DataContext.Provider value={{ result, setResult, input, setInput }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
