import { CheckUser } from "@/util/CheckUser";
import React from "react";

const page = async () => {
  await CheckUser();
  return (
    <div>
      <title>salary</title>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Salary
      </h1>
    </div>
  );
};

export default page;
