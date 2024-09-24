import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex  ">
      <div className=" h-screen w-screen">
        <img
          className="w-full h-full"
          src="https://www.wns.co.za/Portals/0/Images/HeaderBanner/desktop/1087/53/travel_HD.jpg"
          alt="hihi"
        />
      </div>
      <div className="w-1/2 flex item-center justify-center"> {children}</div>
    </div>
  );
}
