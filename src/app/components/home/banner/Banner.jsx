import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "50vh",
};
export const Banner = () => {
  const renderListCarousel = () => {
    return (
      <>
        <div>
          <div style={contentStyle}>
            <img
              className="w-full h-full object-cover"
              src="https://th.bing.com/th/id/OIP.PV6Dz_FxeBe2f79afYoqzwAAAA?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              className="w-full h-full object-cover"
              src="https://th.bing.com/th/id/OIP.PV6Dz_FxeBe2f79afYoqzwAAAA?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              className="w-full h-full object-cover"
              src="https://th.bing.com/th/id/OIP.PV6Dz_FxeBe2f79afYoqzwAAAA?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
        </div>
      </>
    );
  };
  return <Carousel>{renderListCarousel()}</Carousel>;
};
