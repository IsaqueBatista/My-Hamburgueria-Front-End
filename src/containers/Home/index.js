import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from 'axios';

import Hamburguer from '../../assets/hamburguer.png'

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, ButtonRequests } from "./styles";


function App() {

  const [users, setUsers] = useState([]);
  const history = useHistory()

  const inputName = useRef();
  const inputPedido = useRef();

  const addNewRequest = async () => {

    const { data: createPedido } = await axios.post("http://localhost:3001/pedidos",
      {
        pedido: inputPedido.current.value,
        name: inputName.current.value,
      })

    setUsers([...users, createPedido])

    history.push('/pedidos')

  };
  function goPageRequests() {
    history.push("/pedidos");
  }


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
        <ButtonRequests onClick={goPageRequests}>Avançar</ButtonRequests>

      </ContainerItens>
    </Container>
  );
}

export default App;