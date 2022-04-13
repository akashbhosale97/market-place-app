import React from "react";
import { Button } from "@contentstack/venus-components";
import { Link } from "react-router-dom";

const Btn = () => {
  return (
    <Link to="/config">
      <Button>Click Me</Button>
    </Link>
  );
};

export default Btn;
