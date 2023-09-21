/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import datasJson from "../utils/datas.json";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [datas, setDatas] = useState(datasJson);
  const [input, setInput] = useState("");
  const [isEditId, setIsEditId] = useState(null);
  return (
    <TodoContext.Provider
      value={{ datas, setDatas, input, setInput, isEditId, setIsEditId }}
    >
      {children}
    </TodoContext.Provider>
  );
};
