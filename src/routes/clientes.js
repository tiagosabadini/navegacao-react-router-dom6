import {Link, Outlet} from 'react-router-dom';
import {getClientes} from '../data';

export default function Clientes(){
  let clientes = getClientes();

  return (
    <div style={{display: "flex"}}>
      <nav
        style={{
          borderRight: "solid 2px green",
          padding: "1rem",
          marginRight: "2rem",
        }}
      >

      {
        clientes.map((cliente) => {
          return <Link
            style={{
              display: "block",
              margin: "1rem 0",
            }}
            to={`/clientes/${cliente.id}`} key={cliente.id}>
            {cliente.nome}
          </Link>
        })
      }

      </nav>

      <div><Outlet /></div>
    </div>
    
  );
}