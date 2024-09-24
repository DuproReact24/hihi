import React from "react";
import ListRoom from "../components/home/listroom/ListRoom";
import { Banner } from "../components/home/banner/Banner";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <h3 className="font-semibold text-2xl text-center">Địa điểm du lịch </h3>
      {/* list room */}
      <ListRoom />
    </div>
  );
};

export default Homepage;
