"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function Navigation() {
  return (
    <Navbar fluid rounded>
      {/* <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        <a href="/home">Bislerium</a>
      </span>
      {/* </Navbar.Brand> */}
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/Home">Home</Navbar.Link>
        <Navbar.Link href="/page">Login</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="/Signup">Sign Up</Navbar.Link>
        <Navbar.Link href="/ContactUs">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
