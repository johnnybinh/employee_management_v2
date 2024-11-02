import React from "react";
import { clerkClient } from "@/util/ClerkClient";
import { db } from "@/app/db";
import { TableEmp } from "./TableEmp";
const page = async () => {
  //const user = await clerkClient.users.getUserList({});
  return (
    <div className="p-10">
      <center>
        <h1 className="font-bold text-3xl">Salary</h1>
      </center>
      <div className="p-20">
        <TableEmp />
      </div>
    </div>
  );
};

export default page;
