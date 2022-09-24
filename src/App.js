import React, { useState, useRef } from "react";

import Hamburguer from './assets/hamburguer.png'
import Trash from './assets/trash.svg'
import Pen from './assets/pen.png'

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User, DivPedidoAndName, DivTrashPen } from "./styles";


function App() {
  // Esse é um estado no React.  
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputPedido = useRef();

  function addNewRequest() {
    setUsers([...users,{ id: Math.random(), name: inputName.current.value, pedido: inputPedido.current.value }])
  };

  function editPedido(userId) {
    // const newEdit = users.find(user => user.id === userId);
    // setUsers(newEdit)
  };

  function deletePedido(userId) {
     const newDelete = users.filter(user => user.id !== userId)
     setUsers(newDelete)
  };


  return (
    <Container>
      <Image alt="logo-hamburguer" src={Hamburguer} />

      <ContainerItens>

        <H1>Faça seu Pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputPedido} placeholder="Digite seu Pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome do Cliente" />

        <Button onClick={addNewRequest}>Realizar Pedido</Button>

        <ul>
          {users.map((user) => (

            <User key={user.id}>

              <DivPedidoAndName>
                <p>{user.pedido}</p>
                <p>{user.name}</p>
              </DivPedidoAndName>

              <DivTrashPen>
                <button onClick={() => editPedido(user.id)}> <img alt="imagem-caneca" src={Pen} /></button>
                <button onClick={() => deletePedido(user.id)}> <img alt="imagem-lixeira" src={Trash} /></button>
              </DivTrashPen>

            </User>
          ))}
        </ul>

      </ContainerItens>
    </Container>
  );
}

export default App;