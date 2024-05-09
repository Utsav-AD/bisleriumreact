"use client";

import { Footer } from "flowbite-react";

export default function Foot() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Bislerium" year={2022} />
      </div>
    </Footer>
  );
}
