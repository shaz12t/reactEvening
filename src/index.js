
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Watchlist2 from "./pages/Watchlist2";
import Top10 from "./pages/Top10";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import ErrorElement from "./pages/ErrorElement";
import Footer from "./components/Footer";
import CoinByIdData from "./pages/CoinsByIdData";
import { createContext } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { IoMdOpen } from "react-icons/io";
import { createSlice } from "@reduxjs/toolkit";
 
export const Data = createContext();

const userSlice = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    setuser(state, action) {
      return action.payload;
    },

    removeUser(state, action) {
      return "";
    },
  },
});

export const { setuser, removeUser } = userSlice.actions;
export default userSlice.reducer;


export const Name = createContext();

const Applayout = () => {
  return (
    <div>
      <Provider store = {store}>
        <Name.Provider value={"coin"}>
      
      <Navbar />
      <Outlet />
      <Footer />
      </Name.Provider>
      </Provider>
    </div>
  );
};

const browserRouter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/top10", element: <Top10 /> },
      { path: "/watchlist2", element: <Watchlist2 /> },
      { path: "/trending", element: <Trending /> },
      { path: "/SignIn", element: <SignIn /> },
      { path: "/Login", element: <Login /> },
      { path: "/coin/:id", element: <CoinByIdData /> },
      { path: "*", element: <NotFound /> },
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browserRouter} />);