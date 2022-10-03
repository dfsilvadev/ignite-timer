import { Route, Routes } from "react-router-dom";

import { History, Home } from "../pages";

import { Layout } from "../templates";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}
