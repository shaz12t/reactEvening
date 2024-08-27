import { useState, useEffect } from "react";
// import Cards from "../components/cards";
import React from "react";
import Cards2 from "../components/Cards2"; 
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DummyUi from "../components/DummyUi";


function Trending() {
  const [data, setData] = useState([]);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === "") {
      navigate("/");
    } else {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  if (data.length === 0) {
    return <div><DummyUi/> </div>;
  } else {
    return (
      <div>
        <Cards2 apiData={data} />
      </div>
    );
  }
}

export default Trending;