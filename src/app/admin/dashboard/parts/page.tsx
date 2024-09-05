import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import TableParts from "@/components/Dashboard/parts/TableParts";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
export const metadata: Metadata = {
  title:
    "Admin Dashboard",
  
};

const PartsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
 
        <TableParts />

      </div>
    </DefaultLayout>
  );
};

export default PartsPage;
