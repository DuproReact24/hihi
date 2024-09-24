import React from "react";
import { Button, Dropdown, Space } from "antd";
import { useSelector } from "react-redux";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
export default function NavLogin() {
  const { inforUser } = useSelector((state) => state.userSlice);
  const items = [
    {
      key: "1",
      label: (
        <Link rel="stylesheet" href="">
          Đăng nhập
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="stylesheet" href="">
          Đăng ký
        </Link>
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
      <Button>
        <UserOutlined />
      </Button>
    </Dropdown>
  );
}
