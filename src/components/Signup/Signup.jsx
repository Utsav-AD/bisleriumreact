import React, { useState } from "react";
import axios from "axios";

function RegisterComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerformData = async () => {
    console.log("register formData");
    const url = "https://localhost:7241/api/User/RegisterUser";

    const formData = new FormData();

    formData.append("FirstName", formData.firstName);
    formData.append("LastName", formData.lastName);
    formData.append("PhoneNumber", formData.phoneNumber);
    formData.append("Email ", formData.email);
    formData.append("Password ", formData.password);
    formData.append("ConfirmPassword  ", formData.confirmPassword);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        // headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("text", response.status);
      const jsonData = await response.json();
      console.log(jsonData);

      if (response.status === 200) {
        return jsonData;
      } else {
        console.log(jsonData);
        throw Error(jsonData.message);
      }
    } catch (e) {
      throw Error(e.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    registerformData()
      .then(() => {
        console.log("good");
      })
      .catch((e) => {
        console.log("bad");
        console.log(e);
      });
  };

  return (
    <div className="w-10/12 mx-auto py-10">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-y-10">
        <div className="flex flex-row justify-center gap-x-20 ">
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-x-20 ">
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-x-20 ">
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className=" w-full flex flex-row justify-center ">
          <div className="">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Blogger">Blogger</option>
            </select>
          </div>
        </div>
        <div className=" flex flex-row justify-center mx-auto ">
          <button
            type="submit"
            className="bg-blue-400 p-2 rounded-lg hover:text-white hover:transition-all"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterComponent;
