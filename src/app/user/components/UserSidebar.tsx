"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function UserSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href={"/user"}>Dashboard</Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Link href={"user/salary"}>Salary</Link>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserButton showName />
      </SidebarFooter>
    </Sidebar>
  );
}
