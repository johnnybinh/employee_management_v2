"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserSidebar } from "./components/UserSidebar";

import { useSidebar } from "@/components/ui/sidebar";
import { ChevronRight } from "lucide-react";

function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar}>
      <ChevronRight />
    </button>
  );
}

export default function UserDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <UserSidebar />
      <main className="p-2">
        <CustomTrigger />
        <div className="p-2 flex flex-col  w-screen h-screen">{children}</div>
      </main>
    </SidebarProvider>
  );
}
