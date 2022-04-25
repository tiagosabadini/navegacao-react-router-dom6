import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Gestão de Lojinha</h1>
      <nav
        style={{
          borderBottom: "solid 2px green",
          paddingBottom: "1rem",
        }}
      >
        <Link to="clientes">Clientes</Link> |{" "}
        <Link to="produtos">Produtos</Link>
      </nav>
      <Outlet />
    </div>
  );
}