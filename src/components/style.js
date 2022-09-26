import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 500px;
  background: #c1c1c1;
  border-radius: 12px;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;

  label {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }

  input {
    width: 100%;
    height: 32px;
    border-radius: 8px;
    border: none;
    padding: 12px;
    outline: none;
    font-size: 18px;
    font-weight: bold;
  }

  button {
    width: 100%;
    height: 32px;
    border-radius: 8px;
    border: none;
    background: #fff;
    font-size: 18px;
    font-weight: bold;

    cursor: pointer;
  }

  p {
    position: absolute;
    right: -12px;
    top: -12px;
    width: 40px;
    height: 40px;
    background: #000;
    color: #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  button:hover,
  p:hover {
    opacity: 0.8;
  }

  button:active,
  p:active {
    opacity: 0.6;
  }
`;
