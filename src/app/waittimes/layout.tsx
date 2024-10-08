"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SideNav from "./SideNav";

export default function Layout({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="wait_times_gridcontainer">
        <SideNav />
        <div className="overflow">{children}</div>
      </div>
    </QueryClientProvider>
  );
}
