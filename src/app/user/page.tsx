import { checkRole } from "@/util/CheckRole";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { Roles } from "@/types/global";
import Head from "next/head";

const page = async () => {
  const user = await currentUser();
  const roles: Roles = user?.publicMetadata.role;
  const isAdmin = await checkRole(roles);

  if ((await isAdmin) === true) {
    redirect("/admin");
  }
  return (
    <div>
      <title>User Dashboard</title>
      <h1>User Dashboard</h1>
    </div>
  );
};

export default page;
