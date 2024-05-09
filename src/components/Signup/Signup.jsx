import React, { useState } from "react";
import axios from "axios";

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
    formData.append("Email", userFormData.email); // removed trailing space
    formData.append("Password", userFormData.password); // removed trailing space
    formData.append("ConfirmPassword", userFormData.confirmPassword); // removed trailing spaces

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const jsonData = await response.json();
      console.log("Response Status:", response.status, "Data:", jsonData);

      if (response.status === 200) {
        console.log("Registration successful:", jsonData);
      } else {
        console.error("Registration failed:", jsonData);
        throw new Error(jsonData.message || "Unknown error occurred");
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
      .catch(error => console.error("Registration error:", error));
  };

  return (
    <div className="w-10/12 mx-auto py-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-10">
        <div className="flex flex-row justify-center gap-x-20 ">
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userFormData.firstName}
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
              value={userFormData.lastName}
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
              value={userFormData.phoneNumber}
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
              value={userFormData.email}
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
              value={userFormData.password}
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
              value={userFormData.confirmPassword}
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
              value={userFormData.role}
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
          <button type="submit" className="bg-blue-400 p-2 rounded-lg hover:text-white hover:transition-all">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterComponent;
