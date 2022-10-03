import { Outlet } from "react-router-dom";

import { Header } from "../../components";

import { LayoutWrapper } from "./styles";

export default function Layout() {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
}
