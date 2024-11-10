import { RequestsTable } from "@/components/RequestsTable";
import { MainLayout } from "@/layouts/MainLayout";

export function RejectedRequests() {
  return (
    <MainLayout heading="Отклоненные заявки">
      <RequestsTable />
    </MainLayout>
  );
}
