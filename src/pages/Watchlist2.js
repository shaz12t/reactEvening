import { useSelector } from "react-redux";
import Cards2 from "../components/Cards2";
import NoDataWatchList from "./NoDataWatchList";

function Watchlist2() {
  var data = useSelector((store) => store.watchlistSlice);
  console.log(data);
  return data.length == 0 ? (
    <div> <NoDataWatchList></NoDataWatchList></div>
  ) : (
    <div>
      <Cards2 apiData={data} />
    </div>
  );
}

export default Watchlist2;