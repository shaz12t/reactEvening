
import { useNavigate } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";

    const NoDataWatchList= () => {
        const navigate = useNavigate();
      
        const handleClick = () => {
          navigate('/trending');
        };
    return(
        <div className="w-screen h-screen bg-gradient-to-r from-neutral-900 via-gray-800 to-yellow-900  items-center justify-center">
   <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-neutral-900 via-gray-800 to-yellow-900">
  <h3 className="text-white mb-4">Oops! Nothing In Watchlist</h3>
  <button className="bg-white text-yellow-800  hover:text-white hover:bg-yellow-800 font-bold py-2 px-4 rounded flex items-center gap-3" onClick={handleClick} ><FaCartPlus />Add To WatchList</button>
</div>

    </div>
       )
    
};
export default NoDataWatchList;