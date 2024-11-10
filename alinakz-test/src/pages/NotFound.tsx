import { Button } from "@/components/ui/Button";
import { MainLayout } from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <MainLayout heading="Страница не найдена" className="flex justify-center">
      <Button asChild>
        <Link to="/">На главную</Link>
      </Button>
    </MainLayout>
  );
}
