"use client";
import DashBoardUi from "@/components/Ui/DashBoardUi/DashBoardUi";

export default function Layout({ children }) {
  return (
    <DashBoardUi>
      <div className="p-8 ">{children}</div>
    </DashBoardUi>
  );
}
