import { useState } from "react";
import "./App.css";
import Perfil from "./components/Perfil";
import Address from "./components/Address";
import Products from "./components/Products";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="endereco" element={<Address />} />
          <Route path="produtos" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
