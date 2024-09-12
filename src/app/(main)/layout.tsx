"use client";

import DashBoardUi from "@/components/global/DashBoardUi/DashBoardUi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DashBoardUi>{children}</DashBoardUi>
    </QueryClientProvider>
  );
}

export default layout;
