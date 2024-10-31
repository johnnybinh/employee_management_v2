import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="p-10 flex justify-center items-center h-full ">
      <SignUp signInFallbackRedirectUrl={"/user"} />
    </div>
  );
};

export default page;
