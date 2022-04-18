import React, { useEffect, useState } from "react";
import ContentstackAppSdk from "@contentstack/app-sdk";

const Btn = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    ContentstackAppSdk.init().then(async (appSdk) => {
      setData(appSdk.config.context);
    });
  }, []);
  return (
    <>
      <h1>{data}</h1>
    </>
  );
};

export default Btn;
