import {useParams} from 'react-router-dom';
import {getCliente} from '../data';

export default function Cliente(){
  const params = useParams();
  const cliente = getCliente(parseInt(params.clienteId, 10));

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Nome: {cliente.nome}</h2>
      <p>
        {cliente.nome}: #{cliente.id}
      </p>
      <p>Idade: {cliente.idade}</p>
      <p>Local de Nascimento: {cliente.local_nascimento}</p>      
    </main>
  );
}