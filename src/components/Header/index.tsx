import { NavLink } from "react-router-dom";
import { Timer, Scroll } from "phosphor-react";

import { Nav, Navbar } from "./styles";

import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <Navbar>
      <img
        src={logo}
        alt="Dois triângulos, um maior sobrepondo um menor formando o logo ignite"
      />
      <Nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </Nav>
    </Navbar>
  );
}
