import { RequestsTable } from "@/components/RequestsTable";
import { MainLayout } from "@/layouts/MainLayout";

export function MyRequests() {
  return (
    <MainLayout heading="Мои заявки">
      <RequestsTable />
    </MainLayout>
  );
}
