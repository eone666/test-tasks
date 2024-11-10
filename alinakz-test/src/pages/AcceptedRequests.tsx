import { RequestsTable } from "@/components/RequestsTable";
import { MainLayout } from "@/layouts/MainLayout";

export function AcceptedRequests() {
  return (
    <MainLayout heading="Согласованные заявки">
      <RequestsTable />
    </MainLayout>
  );
}
