import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Clientes from "./routes/clientes";
import Cliente from "./routes/cliente";
import Produtos from "./routes/produtos";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="clientes" element={<Clientes />}>
          <Route path=":clienteId" element={<Cliente />} />
        </Route>
        <Route path="produtos" element={<Produtos />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);