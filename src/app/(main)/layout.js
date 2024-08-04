import DashBoardUi from "@/components/Ui/DashBoardUi/DashBoardUi";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body >
      <DashBoardUi>
        {children}
        </DashBoardUi>
      </body>
    </html>
  );
}
