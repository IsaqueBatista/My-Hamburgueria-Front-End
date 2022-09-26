import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from 'axios';

import Embalagem from '../../assets/embalagem.svg'
import Trash from '../../assets/trash.svg'
import Pen from '../../assets/pen.png'

import { Container, Image, ContainerItens, H1, Button, User, DivPedidoAndName, DivTrashPen } from "./styles";

 
function Requests() {

  const [users, setUsers] = useState([]);
  const history = useHistory() 

  useEffect(() => {
    async function buscarPedidos() {
      const { data: mostrandoPedidos } = await axios.get("http://localhost:3001/users")
      setUsers(mostrandoPedidos)
    }
    buscarPedidos()
  }, [])


  async function editPedido(userId) {
    // const newEdit = users.find(user => user.id === userId);
    // setUsers(newEdit)
  };

  async function deletePedido(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newDelete = users.filter(user => user.id !== userId)
    setUsers(newDelete)
  };

  function goBackPage() {
    history.push('/')
  }


  return (
    <Container>
      <Image alt="logo-embalagem" src={Embalagem} />

      <ContainerItens>

        <H1>Pedidos</H1>
          <Button onClick={goBackPage}>Voltar</Button>

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

export default Requests;