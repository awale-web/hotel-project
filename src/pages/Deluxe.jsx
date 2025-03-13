import React from "react";
import "../style/Rooms.css";

const DeluxeRoom = () => {
  return (
    <div className="room-detail">
      <img src="/deluxe-suite-view.webp"/>
      <h1>Deluxe Room</h1>
      <p>A stylish and cozy deluxe room with modern decor, a comfortable bed, and a stunning view.</p>
      <p className="price">Price: $250 per night</p>
    </div>
  );
};

export default DeluxeRoom;