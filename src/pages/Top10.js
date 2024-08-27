import React, {useEffect, useState } from "react";
import Cards2 from "../components/Cards2";
import { useRef } from "react";
import DummyUi from "../components/DummyUi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Top10 = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  
 
  useEffect(() => {
    if (user === "") {
      navigate("/");
    } else {
      const url =
        "https://api.coingecko.com/api/v3/search/trending/?precision=3";

      fetch(url).then((response) =>
        response.json().then((data) => setData(data))
      );
    }
  }, [user]);

return data.length === 0 ? (
  <div><DummyUi/></div>
) : (
  <div className="container w-full mx-auto">
    
    <Cards2 apiData={data.coins} checker={"top10"} />
  </div>
);
};
 export default Top10;