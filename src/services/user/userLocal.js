"use client";
export const userLocal = {
  // kiểm tra xem có phải client component không
  set: (inforUser) => {
    if (typeof window != "undefined") {
      let json = JSON.stringify(inforUser);
      localStorage.setItem("User__infor_next", json);
    }
  },
  get: () => {
    if (typeof window != "undefined") {
      let json = localStorage.getItem("User__infor_next");
      if (json) {
        return JSON.parse(json);
      } else {
        return null;
      }
    }
  },
  remove: () => {
    if (typeof window != "undefined") {
      localStorage.removeItem("User__infor_next");
    }
  },
};
