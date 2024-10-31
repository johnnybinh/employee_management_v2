import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function CheckUser() {
  const user = await currentUser();
  if (user === null) {
    redirect("/login");
  }
}
