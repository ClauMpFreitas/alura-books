import styled from "styled-components";
import { Titulo } from "../Titulo";

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  width: 95%;
  height: 189px;
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
  text-align: center;
  width: 150px;

  &:hover {
    cursor: pointer;
  }
`;

const Descricao = styled.p`
  max-width: 280px;
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
`;

function CardRecomenda({ titulo, subtitulo, descricao, imagensLivros }) {
  return (
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
        <Botao>Saiba mais</Botao>
      </div>
    </Card>
  );
}

export default CardRecomenda;
