import styled from "styled-components";
import { Titulo } from "../Titulo";
import React, { useState } from "react";

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  width: 95%;
  height: 189px;

  @media screen and (max-width: 720px) {
    height: 393px;
    }
`;

const Botao = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 5px 0px;
  font-size: 16px;
  border: none;
  margin-right: 11px;
  font-weight: 900;
  display: block;
  justify-content: center;
  text-align: center;
  width: 150px;

  &:hover {
    cursor: pointer;
  }
`;

const Descricao = styled.p`
  max-width: 280px;
  width: 90%;
`;

const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

const ImgLivro = styled.img`
  width: 150px;
  margin-right: 11px;
  cursor: pointer;
`;

const Modal = styled.div`
display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
justify-content: center;
align-items: center;

@media screen and (max-width: 720px) {
  overflow: auto;
}
`;

const ModalContent = styled.div`
background-color: #fff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
padding: 20px;
max-width: 100%;
width: auto;

@media screen and (max-width: 720px) {
  max-width: 100%;
  font-size: 14.5px;
}
`;

const BotaoFechar = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 5px 15px;
  font-size: 16px;
  border: none;
  margin-top: 15px;
  font-weight: 900;
  cursor: pointer;
`;

function CardRecomenda({ titulo, subtitulo, descricao, imagensLivros, subDescricao }) {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <>
    <Card>
      <div>
        <Titulo tamanhoFonte="16px" cor="#730d4a" alinhamento="left">
          {titulo}
        </Titulo>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <ImgLivro
          src={imagensLivros}
          style={{ width: "150px", height: "150px" }}
        />
        <Botao onClick={abrirModal}>Saiba mais</Botao>
      </div>
    </Card>
    <Modal isOpen={modalAberto} onClick={fecharModal}>
        <ModalContent>
          <Subtitulo>{subtitulo}</Subtitulo>
          <Descricao>{subDescricao || descricao}</Descricao>
          <BotaoFechar onClick={fecharModal}>Fechar</BotaoFechar>
        </ModalContent>
    </Modal>
    </>
  );
}

export default CardRecomenda;
