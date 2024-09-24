"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavLogin from "./NavLogin";
import NavLogout from "./NavLogout";

export default function Navigate() {
  const { inforUser } = useSelector((state) => state.userSlice);
  const [isValue, setValue] = useState(false);
  const renderApp = () => {
    if (inforUser) {
      return <NavLogout />;
    } else {
      return <NavLogin />;
    }
  };
  useEffect(() => {
    setValue(true);
  }, []);

  return <div>{isValue ? renderApp() : ""}</div>;
}
