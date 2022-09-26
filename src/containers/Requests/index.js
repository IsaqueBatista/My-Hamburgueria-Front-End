import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Embalagem from "../../assets/embalagem.svg";
import Trash from "../../assets/trash.svg";
import Pen from "../../assets/pen.png";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  User,
  DivPedidoAndName,
  DivTrashPen,
} from "./styles";
import { Modal } from "../../components/modal";

function Requests() {
  const [pedidos, setPedidos] = useState([]);
  const [userPedido, setUserPedido] = useState(null);
  const history = useHistory();


  async function buscarPedidos() {
    const { data: mostrandoPedidos } = await axios.get(
      "http://localhost:3001/pedidos"
    );
    setPedidos(mostrandoPedidos);
  }
  
  useEffect(() => {
    buscarPedidos();
  }, []);

  const editPedido = async (userId, name, pedido) => {
    await axios.put(
      `http://localhost:3001/pedidos/${userId}`,
      {
        pedido,
        name,
      }
    );
    setUserPedido(null)
    buscarPedidos()

  };

  async function deletePedido(userId) {
    await axios.delete(`http://localhost:3001/pedidos/${userId}`);
    const newDelete = pedidos.filter((user) => user.id !== userId);
    setPedidos(newDelete);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      {userPedido && <Modal userPedido={userPedido} onClick={editPedido} closeModal={() => setUserPedido(null)}/>}
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
                <button onClick={() => setUserPedido(user)}>
                  <img alt="imagem-caneca" src={Pen} />
                </button>
                <button onClick={() => deletePedido(user.id)}>
                  <img alt="imagem-lixeira" src={Trash} />
                </button>
              </DivTrashPen>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default Requests;
