import React from "react";
import Card from "./Card";

const Cards2 = ({ apiData, checker }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8 px-5 mx-auto bg-black">
      {apiData.map((element, index) => (
        <Card
          item={checker === "top10" ? element.item : element}
          key={checker === "top10" ? element.item.id : element.id}
          checker={checker}
        />
      ))}
    </div>
  );
};

export default Cards2;