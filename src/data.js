let clientes = [
  {
    "id": 1,
    "nome": "joão da silva",
    "idade": 22,
    "local_nascimento": "rio de janeiro",
  },
  {
    "id": 2,
    "nome": "maria helena",
    "idade": 32,
    "local_nascimento": "são paulo",
  },
  {
    "id": 3,
    "nome": "jonas almeida",
    "idade": 44,
    "local_nascimento": "minas gerais",
  },
  {
    "id": 4,
    "nome": "juliana maria talgaz",
    "idade": 26,
    "local_nascimento": "minas gerais",
  },
  {
    "id": 5,
    "nome": "tereza maria",
    "idade": 54,
    "local_nascimento": "minas gerais",
  },
  {
    "id": 6,
    "nome": "jober joelson silva",
    "idade": 28,
    "local_nascimento": "são paulo",
  },
  {
    "id": 7,
    "nome": "mariana silva",
    "idade": 20,
    "local_nascimento": "rio de janeiro",
  },
  {
    "id": 8,
    "nome": "roberto manejo",
    "idade": 21,
    "local_nascimento": "rio de janeiro",
  },
];

export function getClientes() {
  return clientes;
}

export function getCliente(id){
  return getClientes().find(
    (cliente) => cliente.id === id
  );
}