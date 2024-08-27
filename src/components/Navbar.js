import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/userSlice";
function Navbar(props) {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(removeUser());
    navigate("/");
  }

  return (
    <div className="border-transparent border-opacity-50  shadow-xl j px-4  top-0  bg-gradient-to-r from-neutral-900  via-gray-800 to-yellow-900">
      <div className="flex justify-between px-4 items-center">
        <Link to={"/"}>
          {" "}
          <h1 className="cursor-pointer text-[50px] font-extrabold">
            <span className="text-white">Crypto</span><span className="text-yellow-800">Crawler</span>
          </h1>
        </Link>
        {user === "logged in" && (
        <navitems className=" flex font-semibold text-[25px] gap-10">
          <Link to={"/Top10"}>
            {" "}
            <p className="cursor-pointer text-white text-[30px] hover:text-yellow-800 ">Top</p>
          </Link>
          <Link to={"/Trending"}>
            {" "}
            <p className="cursor-pointer text-white text-[30px] hover:text-yellow-800">Trending</p>
          </Link>
          <Link to={"/watchlist"}>
            {" "}
            <p className="cursor-pointer text-white text-[30px] hover:text-yellow-800">Watchlist</p>
          </Link>
          </navitems>
        )}

         <div className="flex gap-4">
        {user === "logged in" ? (
            <button
              onClick={handleClick}
              className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              Logout
            </button>
          ) : (
            <>
          <Link to={"/login"}>
            <button className="bg-yellow-700 text-white px-2 py-1 rounded-lg shadow-lg ">
              LogIn
            </button>
          </Link>
          <Link to={"/SignIn"}>
            <button className="bg-yellow-700 text-white px-2 py-1 rounded-lg shadow-lg">
              SignIn
              </button>{" "}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;