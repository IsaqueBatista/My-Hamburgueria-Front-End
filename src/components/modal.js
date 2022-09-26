import React,{useState, useEffect} from 'react';
import { ModalStyled } from './style';


export const Modal = ({userPedido,onClick,closeModal}) =>{
  const [name, setName] = useState('')
  const [pedido, setPedido] = useState('')

  useEffect(() => {
    setName(userPedido?.name)
    setPedido(userPedido?.pedido)
  },[userPedido])


  return(
    <ModalStyled>
      <p onClick={closeModal}>X</p>
      <label>Nome</label>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <label>Pedido</label>
      <input value={pedido} onChange={(e) => setPedido(e.target.value)}/>
      <button onClick={() => onClick(userPedido?.id, name, pedido)}>Editar</button>
    </ModalStyled>
  )
}




