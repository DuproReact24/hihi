import { roomService } from "@/services/room/roomService";
import React from "react";

const ListRoom = async () => {
  const dataListRoom = await roomService.getAllRoom();
  console.log({ dataListRoom });
  const renderListCardRoom = (item) => {
    return (
      <div className="border rounded p-3 shadow space-y-5" key={item.id}>
        <div className="h-48 w-full border rounded">
          <img
            src={item.hinhAnh}
            alt="hi"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <p className="font-semibold text-sm">{item.tenPhong}</p>
          <p className="font-semibold text-sm">{item.giaTien}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-3">
        {dataListRoom.content.map((item) => {
          return renderListCardRoom(item);
        })}
      </div>
    </div>
  );
};

export default ListRoom;
