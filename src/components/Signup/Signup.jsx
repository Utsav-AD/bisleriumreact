import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RegisterComponent() {
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
    console.log("Registering user");
    const url = "https://localhost:7241/api/User/RegisterUser";

    const formData = new FormData();
    formData.append("FirstName", userFormData.firstName);
    formData.append("LastName", userFormData.lastName);
    formData.append("PhoneNumber", userFormData.phoneNumber);
    formData.append("Email", userFormData.email);
    formData.append("Password", userFormData.password);
    formData.append("ConfirmPassword", userFormData.confirmPassword);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response Status:", response.status, "Data:", response.data);

      if (response.status === 200) {
        console.log("Registration successful:", response.data);
      } else {
        console.error("Registration failed:", response.data);
        throw new Error(response.data.message || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", userFormData);
    registerUser()
      .then(() => console.log("Registration processed"))
      .catch((error) => console.error("Registration error:", error));
  };

  return (
    <div
      className="w-10/12 mx-auto flex flex-row gap-x-10"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="flex lg:flex-row sm:flex-col  mx-auto gap-x-10 border rounded-2xl mt-16 bg-slate-200 lg:items-start  sm:items-center">
        <div className="lg:w-2/5 h-full sm:w-4/5 lg:h-full bg-cyan-700  sm:rounded-t-2xl lg:rounded-t-none lg:rounded-tl-2xl lg:rounded-bl-2xl  flex  ">
          <div className="lg:h-1/2  sm:h-full sm:py-32">
            <div className="flex justify-around items-center ">
              <h1
                className="text-slate-300 font-bold text-3xl "
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Welcome Back!
              </h1>
            </div>
            <div className="w-2/3 my-0 mx-auto flex justify-center mt-4">
              <p className="text-center">
                To keep connected with us, please login with your personal info
              </p>
            </div>

            <div className="flex justify-center mt-8  ">
              <Link
                to="/login"
                className="px-12 py-3 text-white font-semibold bg-cyan-700 rounded-3xl border border-white  hover:border-cyan-200 hover:shadow hover:shadow-cyan-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="my-8 ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-10">
            {/* <div className="flex flex-row justify-center gap-x-20 "> */}
            <div className="flex  gap-2 items-center w-full ">
              <div className="w-40 flex flex-row ">
                <label htmlFor="firstName">First Name:</label>
              </div>
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={userFormData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="w-40 flex flex-row ">
                <label htmlFor="lastName">Last Name:</label>
              </div>
              <input
                type="text"
                id="lastName"
                className=""
                name="lastName"
                value={userFormData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            {/* <div className="flex flex-row justify-center gap-x-20 "> */}
            <div className="flex flex-row gap-2 items-center">
              <div className="w-40 flex flex-row ">
                <label htmlFor="phoneNumber">Phone Number:</label>
              </div>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={userFormData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="w-40 flex flex-row ">
                <label htmlFor="email">Email:</label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={userFormData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* </div> */}
            <div className="flex flex-row gap-2 items-center">
              {/* <div className="flex flex-row gap-2 items-center"> */}
              <div className="w-40 flex flex-row ">
                <label htmlFor="password">Password:</label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={userFormData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="w-40 flex flex-row ">
                <label htmlFor="confirmPassword">Confirm Password:</label>
              </div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={userFormData.confirmPassword}
                onChange={handleChange}
                required
              />
              {/* </div> */}
            </div>
            {/* <div className=" w-full flex flex-row justify-center ">
            <div className="">
              <label htmlFor="role">Role:</label>
              <select
                id="role"
                name="role"
                value={userFormData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Blogger">Blogger</option>
              </select>
            </div>
          </div> */}
            <div className=" flex flex-row justify-center mx-auto ">
              <button
                type="submit"
                className="bg-blue-500 p-2 px-3 rounded-lg text-white hover:text-white hover:transition-all font-semibold tracking-wider"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
