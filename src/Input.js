import React, { useEffect, useState } from "react";
import { TextInput, Button } from "@contentstack/venus-components";
import ContentstackAppSdk from "@contentstack/app-sdk";
import "@contentstack/venus-components/build/main.css";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [config, setConfig] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setConfig(e.target.value);
  };

  useEffect(() => {
    ContentstackAppSdk.init().then(async (appSdk) => {
      setConfig((appSdk.config.context = config));
      console.log(appSdk);
    });
  }, [config]);

  return (
    <>
      <div
        style={{
          border: "1px solid rgba(0,0,0,0.2)",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <TextInput placeholder="Config Screen" onChange={handleChange} />
      </div>
      <Button onClick={() => navigate("/field-extension")}>Send Data</Button>
    </>
  );
};

export default Input;
