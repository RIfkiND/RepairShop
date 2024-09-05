import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableHistory from "@/components/Dashboard/History/TableHistory"
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
export const metadata: Metadata = {
  title:
    "Admin Dashboard",
    icons: {
      icon: '/favicon.png',
    },
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Storage" />

      <div className="flex flex-col gap-10">
        <TableHistory />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
