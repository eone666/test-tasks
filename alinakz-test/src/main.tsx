import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { Dashboard } from "@/pages/Dashboard";
import { MyRequests } from "@/pages/MyRequests";
import { NewRequest } from "@/pages/NewRequest";
import { NotFound } from "@/pages/NotFound";
import { AcceptedRequests } from "@/pages/AcceptedRequests";
import { RejectedRequests } from "@/pages/RejectedRequests";
import { store } from "@/redux/store";
import "./index.css";
import { Toaster } from "@/components/ui/Toast";
import i18next from "i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/ru/zod.json";

i18next.init({
  lng: "ru",
  resources: {
    ru: { zod: translation },
  },
});
z.setErrorMap(zodI18nMap);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/my-requests" element={<MyRequests />} />
            <Route path="/new-request" element={<NewRequest />} />
            <Route path="/accepted-requests" element={<AcceptedRequests />} />
            <Route path="/rejected-requests" element={<RejectedRequests />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QueryParamProvider>
      </BrowserRouter>
      <Toaster />
    </Provider>
  </React.StrictMode>,
);
