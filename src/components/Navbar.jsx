"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Profile from "./images/Profile picture.png";

export default function Navigation() {
  return (
    <Navbar className="w-11/13">
      {/* <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
      <span className="text-3xl font-bold ">
        <a href="/home">Bislerium</a>
      </span>
      {/* </Navbar.Brand> */}
      <div className="flex md:order-2 rounded-xl">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={Profile} />}
        >
          <Dropdown.Header>
            <span className="block text-sm">test1@gmail.com</span>
            {/* <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span> */}
          </Dropdown.Header>
          {/* <Dropdown.Item>Dashboard</Dropdown.Item> */}
          <Dropdown.Item>Profile</Dropdown.Item>
          {/* <Dropdown.Item>Earnings</Dropdown.Item> */}
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/Home" className="text-xl font-semibold">
          Home
        </Navbar.Link>
        {/* <Navbar.Link href="/login" className="text-xl font-semibold">
          Login
        </Navbar.Link> */}
        <Navbar.Link href="/postblog" className="text-xl font-semibold">
          Post Blog
        </Navbar.Link>
        {/* <Navbar.Link href="/Signup" className="text-xl font-semibold">
          Sign Up
        </Navbar.Link> */}
        {/* <Navbar.Link href="/ContactUs" className="text-xl font-semibold">
          Contact
        </Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
