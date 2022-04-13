import React, { useEffect } from "react";
import { TextInput } from "@contentstack/venus-components";
import ContentstackAppSdk from "@contentstack/app-sdk";
import "@contentstack/venus-components/build/main.css";

const Input = () => {
  useEffect(() => {
    ContentstackAppSdk.init().then(async (appSdk) => {
      const config = await appSdk.getCurrentLocation();
      console.log(config);
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
        <TextInput placeholder="Config Screen" />
      </div>
    </>
  );
};

export default Input;
