import React from "react";
import { MdOutlineStarRate } from "react-icons/md";

const card = ({items}) => {
    console.log(items);
    return(
        <div className="w-full mt-5 bg-cyan-100 border shadow-lg gap- rounded-md py-4 px-5 flex flex-col">
            <div className="flex gap-4 items-center">

                <img  className="w-1/6" src={item-image} alt="Crypto symbol"/>
                <h2 className="text-[20px] font-bold">{items.name}</h2>
                <h2 className="text=[18px] font-semibold text-gray-500">{items.symbol}</h2>
                <MdOutlineStarRate className="text-[50px]" />
            </div>
            <div className="flex items-center gap-4">
                
                <h3 className="border px-2 py-1 text-[22px] rounded-3xl border-green-400 shadow-sm">
          &#x24;{item.price_change_24h}
        </h3> 
        <div className="border p-2 rounded-full border-green-400 shadow-sm">
          {item.ath_change_percentage > 0 ? (
            <FaArrowTrendUp />
          ) : (
            <FaArrowTrendDown />
          )}
        </div>
        <h3 className="text-[28px] font-bold text-green-400">
        {" "}
        &#x24;{item.current_price}
      </h3>
      <div>
        <div>Total Volume: &#x24;{item.total_volume}</div>
        <div>Total Volume: &#x24;{item.market_cap}</div>
      </div>
            </div>
        </div>
    )
}