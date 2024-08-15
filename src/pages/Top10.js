import React, {useEffect, useState } from "react";
import Cards2 from "../components/Cards2";
import { useRef } from "react";

const Top10 = () => {
  const [data, setData] = useState([]);
  const Data = useRef();
  useEffect(() => {
    const url ="https://api.coingecko.com/api/v3/search/trending/";
    fetch(url)
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setData(data);
    })
    .catch((error)=>{
      console.log(error);
  });
  console.log(Data);
}, []);
return data.length === 0 ? (
  <div>Loading</div>
) : (
  <div>
    <h1 ref={Data}></h1>
    <Cards2 apiData={data.coins} checker={"top10"} />
  </div>
);
};
 export default Top10;