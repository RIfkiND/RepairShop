import Calendar from "@/components/Dashboard/Calender/index";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import RepairHistoryTable from "@/components/Dashboard/Calender/RepairHistoryTable";


export const metadata: Metadata = {
  title:
    "Admin Dashboard",
  
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
