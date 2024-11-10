import { MainLayout } from "@/layouts/MainLayout";
import { NewRequest as NewRequestForm } from "@/components/forms/NewRequest.tsx";

export function NewRequest() {
  return (
    <MainLayout heading="Новая заявка">
      <NewRequestForm />
    </MainLayout>
  );
}
