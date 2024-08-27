import Calendar from "@/components/Dashboard/Calender/index";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import RepairHistoryTable from "@/components/Dashboard/Calender/RepairHistoryTable";


export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Calendar />
     <RepairHistoryTable/>
    </DefaultLayout>
  );
};

export default CalendarPage;
