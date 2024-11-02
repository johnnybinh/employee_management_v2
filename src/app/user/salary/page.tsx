import { CheckUser } from "@/util/CheckUser";
import React from "react";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/app/db";
import { eq } from "drizzle-orm";
import { UserSalaries } from "@/app/db/schema/schema";

const page = async () => {
  await CheckUser();
  const user = await currentUser();
  const salary = await db
    .select({ salary: UserSalaries.salary })
    .from(UserSalaries)
    .where(eq(UserSalaries.user_id, user.id));
  return (
    <div className="w-full flex h-full flex-col gap-4 items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Salary
      </h1>
      <Card className="m-40 w-1/2">
        <CardHeader>
          <center>
            <CardTitle className="text-2xl">Your Current Salary</CardTitle>
          </center>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl">User: {user?.fullName}</CardTitle>
          <CardDescription>Your Salary {salary[0].salary}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
