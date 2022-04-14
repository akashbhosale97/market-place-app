import React from "react";
import { useLocation } from "react-router-dom";

const Btn = () => {
  const location = useLocation();
  return <h1>{location.state.data}</h1>;
};

export default Btn;
