import { useState } from "react";

const useName = (initName) => {
  const [name, setName] = useState("");
  return setName(initName);
};

export default useName;
