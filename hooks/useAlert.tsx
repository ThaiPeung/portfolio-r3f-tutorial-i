"use client";
import React, { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });

  const showAlert = ({ text, type = "danger" }: any) =>
    setAlert({
      show: true,
      text: "",
      type: "danger",
    });

  const hideAlert = ({ text, type = "danger" }: any) =>
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });

  return <div></div>;
};

export default useAlert;
