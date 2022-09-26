import React, { useState, useRef } from "react";

import axios from 'axios';

import Hamburguer from '../../assets/hamburguer.png'

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from "./styles";


function App() {

  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputPedido = useRef();

  const addNewRequest = async () => {

    const { data: createPedido } = await axios.post("http://localhost:3001/users", { pedido: inputPedido.current.value, name: inputName.current.value, })

    setUsers([...users, createPedido])

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

        <Button to = "/pedidos" onClick={addNewRequest}>Realizar Pedido</Button>

      </ContainerItens>
    </Container>
  );
}

export default App;