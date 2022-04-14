import React, { useEffect, useState } from "react";
import { TextInput, Button } from "@contentstack/venus-components";
import ContentstackAppSdk from "@contentstack/app-sdk";
import "@contentstack/venus-components/build/main.css";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };

  useEffect(() => {
    ContentstackAppSdk.init().then(async (appSdk) => {
      const config = await appSdk.getCurrentLocation();
      console.log(appSdk);
    });
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          border: "1px solid rgba(0,0,0,0.2)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <TextInput placeholder="Config Screen" onChange={handleChange} />
      </div>
      <Button
        onClick={() => navigate("/field-extension", { state: { data: data } })}
      >
        Send Data
      </Button>
    </>
  );
};

export default Input;
