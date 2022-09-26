import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from 'axios';

import Embalagem from '../../assets/embalagem.svg'
import Trash from '../../assets/trash.svg'
import Pen from '../../assets/pen.png'

import { Container, Image, ContainerItens, H1, Button, User, DivPedidoAndName, DivTrashPen } from "./styles";
// import EditPedidos from '../../components/EditPedidos'


function Requests() {

  const [pedidos, setPedidos] = useState([]);
  const history = useHistory()


  useEffect(() => {
    async function buscarPedidos() {
      const { data: mostrandoPedidos } = await axios.get("http://localhost:3001/pedidos")
      setPedidos(mostrandoPedidos)
    }
    buscarPedidos()
  }, [])




  const editPedido = async (userId) => {
    const { data: editarPedido } = await axios.put(`http://localhost:3001/pedidos/${userId}`,
      {
        pedido: inputPedido.current.value,
        name: inputName.current.value,
      })
    setPedidos([...pedidos, editarPedido])
    history.push('/pedidos')
  }






  async function deletePedido(userId) {
    await axios.delete(`http://localhost:3001/pedidos/${userId}`)

    const newDelete = pedidos.filter(user => user.id !== userId)


    setPedidos(newDelete)
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
          {pedidos.map((user) => (

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