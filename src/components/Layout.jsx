import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <main>
        <div className="container">
          <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/perfil">Perfil</Link>
            <Link to="/endereco">Endereço</Link>
            <Link to="/produtos">Produtos</Link>
          </nav>
          <div>
            <Outlet />
          </div>{" "}
        </div>
      </main>
    </div>
  );
}

export default Layout;
