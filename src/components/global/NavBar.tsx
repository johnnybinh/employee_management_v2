import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const NavBar = async () => {
  const user = await currentUser();

  return (
    <div className="flex border-b-2 p-2 px-16 sticky top-0 flex-row justify-between">
      <Link href={"/"}>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Employee Management
        </h3>
      </Link>
      <div className="flex gap-2">
        {user ? (
          <div className="flex justify-center">
            <UserButton showName={true} />
          </div>
        ) : (
          <>
            <Link href="register">
              <Button>Sign Up</Button>
            </Link>
            <Link href="/login">
              <Button variant={"link"}>Login</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
