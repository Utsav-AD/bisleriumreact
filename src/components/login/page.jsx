import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function LoginComponent() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    console.log("Attempting to log in");
    const url = "https://localhost:7241/api/User/Login";
    try {
      const response = await axios.post(url, loginFormData);
      const data = response.data;
      console.log("Response:", data);

      if (response.status === 200 && data.isSuccess) {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.result.token);
        alert("You are logged in!");
      } else {
        console.error("Login failed:", data.result.message);
        alert("Failed to log in: " + data.result.message);
      }
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      alert("An error occurred during login. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <main className="lg:main-container lg:justify-center lg:items-center flex lg:flex-row bg-white lin-grad sm:flex-col  ">
      <div className="flex lg:flex-row mt-20 sm:flex-col lg:items-start bg-red-200 h-full sm:items-center sm:flex-col-reverse">
        <div className="lg:w-3/5 bg-slate-300  h- full lg:mt-0 sm:w-4/5 ">
          <div className="mt-10">
            <div className="flex justify-around">
              <div className="flex lg:flex-row sm:flex-col">
                <h1 className="text-cyan-700 font-bold text-3xl pr-3">
                  Sign in to
                </h1>
                <h1 className="text-orange-400 font-bold text-3xl">
                  BisleriumBlog
                </h1>
              </div>
            </div>

            <div className="flex justify-center mt-1">
              <p>Use your email account</p>
            </div>
            <div className=" items-center flex justify-center mt-12">
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-10">
                {/* <div className="flex flex-row justify-center gap-x-20 "> */}
                <div className="flex  gap-2 items-center w-full ">
                  <div className="w-24 flex flex-row ">
                    <label htmlFor="email">Email:</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      // value={userFormData.firstName}
                      onChange={handleChange}
                      className="h-9 rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex  gap-2 items-center w-full ">
                  <div className="w-24 flex flex-row ">
                    <label htmlFor="firstName">First Name:</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      // value={userFormData.firstName}
                      onChange={handleChange}
                      className="h-9 rounded-lg"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="relative mt-4 flex justify-center">
              {/* <div className="relative w-8/12"> */}
              <div className="flex items-center">
                {/* <div className="relative flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="absolute pl-2 flex items-center">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-gray-500"
                      />
                    </div>
                  </div>
                </div> */}
                <div className="relative mt-4 flex flex-col justify-center">
                  {/* <div className="flex items-center">
                    <div className="absolute pl-2 flex items-center">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="text-gray-500"
                      />
                    </div>
                    <div className="absolute right-2 flex items-center">
                      <FontAwesomeIcon className="text-gray-500" />
                    </div>
                  </div> */}
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="h-12 w-32 text-white font-semibold bg-cyan-700 rounded-3xl"
                    style={{ marginBottom: 72 }}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="h-full bg-cyan-700  ">
          <div className="flex flex-col lg:my-28 sm:my-24 lg:h-60  ">
            <div className="text-3xl flex justify-center mb-5 text-gray-200 font-semibold">
              <h1>Hello, Friend!</h1>
            </div>
            <div className="lg:w-2/4 sm:w-full lg:ml-24 text-center flex sm:justify-center sm:items-center text-gray-100 sm">
              <p className="sm:w-3/4 ">
                Enter your personal details and start the journey with us.
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <Link
                to={"/signup"}
                className="px-10 py-2 bg-transparent rounded-3xl font-semibold text-gray-200 border-gray-200 border-2"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginComponent;
