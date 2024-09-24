"use client";
import { loginThunk } from "@/app/GlobalRedux/user/userThunk";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const dispatch = useDispatch();
  const route = useRouter();
  const fmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      dispatch(loginThunk(value)).then(() => {
        route.push("/");
      });
    },
  });

  return (
    <form className="border rounded-sm p-3" onSubmit={fmLogin.handleSubmit}>
      <h3>Đăng Nhập</h3>
      <div>
        <label htmlFor="">email</label>
        <input
          onChange={fmLogin.handleChange}
          type="text"
          className="w-full border p-2"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="">password</label>
        <input
          onChange={fmLogin.handleChange}
          type="text"
          className="w-full border p-2"
          id="password"
          name="password"
        />
      </div>
      <button className="bg-blue-400">Login</button>
    </form>
  );
}
