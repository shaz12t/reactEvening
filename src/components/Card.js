import React from "react";
import { IoIosStar } from "react-icons/io";
import { MdOutlineStar, MdOutlineStarRate } from "react-icons/md";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleAddCoins, handleRemoveCoin } from "../store/watchlistSlice";
import isEqual from "lodash/isEqual"; // Import lodash for deep comparison

const Card = ({ item, checker }) => {
  
  const watchlistData = useSelector((store) => store.watchlistSlice || []);
   // Use lodash isEqual for deep comparison

  let starRenderingLogic = false;
  watchlistData.forEach(element => {
    if(element.id === item.id ){
      starRenderingLogic = true;
    }
    
  });

  console.log(starRenderingLogic);

  const dispatch = useDispatch();

  function removeCoin() {
    dispatch(handleRemoveCoin(item));
  }

  function addCoinsToWatchlist() {
    dispatch(handleAddCoins(item));
  }

  return (
    <div className="w-full flex flex-col border p-4 bg-gradient-to-r from-neutral-900 via-gray-800 to-yellow-900 background-color-opacity bg-black-200 mt-4 rounded-md shadow-lg gap-5 text-yellow">
      <div className="flex gap-4 items-center">
        <abbr className="w-1/6" title="Click here to know more.">
          <Link to={`/coin/${item.id}`}>
            <img
              src={checker === "top10" ? item.thumb : item.image}
              alt="Crypto symbol"
            />
          </Link>
        </abbr>
        <div className="flex flex-col w-4/6">
          <h2 className="text-[20px] text-yellow-600 font-bold overflow-hidden whitespace-nowrap">
            {item.name}
          </h2>
          <h2 className="text-[18px] font-semibold text-yellow-500">
            {item.symbol}
          </h2>
        </div>
        {!starRenderingLogic ? (
          <MdOutlineStarRate
            onClick={addCoinsToWatchlist}
            className="text-[50px] text-white"
          />
        ) : (
          <IoIosStar  onClick={removeCoin} className="text-[50px]" />
        )}
      </div>

      <div className="flex items-center gap-4">
        {checker !== "top10" && (
          <h3 className="border px-2 py-1 text-[22px] text-yellow-600 rounded-3xl border-yellow-400 shadow-sm">
            ${Math.round(item.price_change_24h * 1000) / 1000}
          </h3>
        )}
        <div className="border p-2 rounded-full text-yellow-600 border-yellow-400 shadow-sm">
          {checker === "top10" ? (
            item.data.price_change_percentage_24h.usd > 0 ? (
              <FaArrowTrendUp />
            ) : (
              <FaArrowTrendDown />
            )
          ) : item.ath_change_percentage > 0 ? (
            <FaArrowTrendUp />
          ) : (
            <FaArrowTrendDown />
          )}
        </div>
      </div>

      <h3 className="text-yellow-600">
        $
        {checker === "top10"
          ? Math.round(item.data.price * 1000000) / 1000000
          : Math.round(item.current_price * 1000000) /1000000 }
      </h3>
      <div>
        <div className="text-yellow-600 border-2 rounded-xl border-white p-1 mb-4">
          Total Volume: ${" "}
          {checker === "top10" ? item.data.total_volume : item.total_volume}
        </div>
        <div className="text-yellow-600 border-2 rounded-xl border-white p-1">
          Market capacity: ${" "}
          {checker === "top10" ? item.data.market_cap : item.market_cap}
        </div>
      </div>
    </div>
  );
};

export default Card;
