
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Watchlist2 from "./pages/Watchlist2";
import Top10 from "./pages/Top10";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import ErrorElement from "./pages/ErrorElement";
import Footer from "./components/Footer";
import CoinByIdData from "./pages/CoinsByIdData";
import { createContext } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
      { path: "/watchlist", element: <Watchlist2 /> },
      { path: "/trending", element: <Trending /> },
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browserRouter} />);