"use client";
import React from "react";
import { Button, Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "@/app/GlobalRedux/user/userSlice";

export default function NavLogout() {
  const { inforUser } = useSelector((state) => state.userSlice);

  const dispatch = useDispatch();
  const items = [
    {
      key: "1",
      label: (
        <button
          onClick={() => {
            dispatch(logoutAction());
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Logout
        </button>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
    >
      <Button>{inforUser?.user.name}</Button>
    </Dropdown>
  );
}
