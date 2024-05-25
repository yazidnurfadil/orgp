import React, { ReactNode } from "react";

const template = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1>NAVBAR public</h1>
      {children}
      {/* footer */}
    </>
  );
};

export default template;
