import React, { useState } from "react";
import axios from "axios";

function LoginComponent() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: ""
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
      console.error("Login error:", error.response ? error.response.data : error.message);
      alert("An error occurred during login. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div className="w-10/12 mx-auto py-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-10">
        <div className="flex flex-row justify-center gap-x-20">
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginFormData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginFormData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-row justify-center mx-auto">
          <button type="submit" className="bg-blue-400 p-2 rounded-lg hover:text-white hover:transition-all">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginComponent;
