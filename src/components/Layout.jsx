import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* DEBORA TENTA USAR O NAVLINK!! */}
      <main className="flex">
        <div className="container">
          <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/perfil">Perfil</Link>
            <Link to="/endereco">Endereço</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/upload">Uploads</Link>
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
