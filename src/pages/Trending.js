import { useState, useEffect } from "react";
// import Cards from "../components/cards";
import React from "react";
import Cards2 from "../components/Cards2"; 




function Trending() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  if (data.length === 0) {
    return <div>Loading </div>;
  } else {
    return (
      <div>
        <Cards2 apiData={data} />
      </div>
    );
  }
}

export default Trending;