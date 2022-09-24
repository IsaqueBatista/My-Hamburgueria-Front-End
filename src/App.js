import React, { useState } from "react";

import Hamburguer from './assets/hamburguer.png'
import Trash from './assets/trash.svg'
import Pen from './assets/pen.png'

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User, DivPedidoAndName, DivTrashPen } from "./styles";


function App() {
  // Esse é um estado no React.  
  const [users, setUsers] = useState([]);
  const [pedido, setPedido] = useState();
  const [name, setName] = useState();


  function addNewRequest() {
    setUsers([...users,{ id: Math.random(), name, pedido }])
  };

  function chanceInputPedido(event) {
    setPedido(event.target.value)
  }
  function changeInputName(event) {
    setName(event.target.value)
  }

  return (
    <Container>
      <Image alt="logo-hamburguer" src={Hamburguer} />

      <ContainerItens>

        <H1>Faça seu Pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input onChange={chanceInputPedido} placeholder="Digite seu Pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input onChange={changeInputName} placeholder="Nome do Cliente" />

        <Button onClick={addNewRequest}>Realizar Pedido</Button>

        <ul>
          {users.map((user) => (

            <User key={user.id}>

              <DivPedidoAndName>
                <p>{user.pedido}</p>
                <p>{user.name}</p>
              </DivPedidoAndName>

              <DivTrashPen>
                <button> <img alt="imagem-caneca" src={Pen} /></button>
                <button> <img alt="imagem-lixeira" src={Trash} /></button>
              </DivTrashPen>

            </User>
          ))}
        </ul>

      </ContainerItens>
    </Container>
  );
}

export default App;