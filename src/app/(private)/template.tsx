import { Navbar } from "@/components/molecules/Navbar";
import React, { ReactNode } from "react";

const template = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1>NAVBAR Private</h1>
      {children}
      {/* footer */}
    </>
  );
};

export default template;
