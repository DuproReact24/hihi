"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function Navigate() {
  const { inforUser } = useSelector((state) => state.userSlice);
  const renderApp = () => {
    if (inforUser) {
      return "đã đăng nhập";
    } else {
      return "chưa đăng nhập";
    }
  };

  return <div>{renderApp()}</div>;
}
