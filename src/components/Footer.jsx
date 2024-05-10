"use client";

import { Footer } from "flowbite-react";

export default function Foot() {
  return (
    <Footer container className="relative bottom-0">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between text-xl"></div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by="Bislerium"
          year={2022}
          className="text-lg"
        />
      </div>
    </Footer>
  );
}
