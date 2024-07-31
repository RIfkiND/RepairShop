import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableBrand from "@/components/Dashboard/parts/TableBrand";
import TableParts from "@/components/Dashboard/parts/TableParts";
import TableType from "@/components/Dashboard/parts/TableType";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const PartsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableBrand />

        <TableParts />
        <TableType />
      </div>
    </DefaultLayout>
  );
};

export default PartsPage;
