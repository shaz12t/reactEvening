import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setuser } from "../store/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = await fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const response = await data.json();
    console.log(response.status);
    if (response.status === false) {
      console.log("inside toast");
      toast.error(response.message, { duration: 3000 });
    } else if (response.status) {
      dispatch(setuser("logged in"));
      navigate("/trending");
    }
  }

 

const Login = () => {
  return (
    <div className="min-h-screen bg-black text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-black shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold text-white">Log in</h1>
            <div className="w-full flex-1 mt-8">
              <div className="my-12 border-b text-center"></div>
              <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-white-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  
                />
                <button className="mt-5 tracking-wide font-semibold bg-yellow-700 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy={7} r={4} />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Log in</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
}
export default Login;