import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import * as imagensLivros from "../../ImagensLivros/ImagensLivros";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

const NovosLivrosContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  max-width: 100%;
  flex-wrap: wrap-reverse;
  box-sizing: border-box;
  justify-content: space-around;
  padding-left: 1px;
  gap: 2px;
  margin-left: 6px;
  margin-bottom: 0.3px;
  cursor: pointer;
`;

const NovidadesDiv = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
`;

const NovosCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <NovidadesDiv>
        <Titulo cor="#3f1034" tamanhoFonte="26px">
          Últimos Lançamentos
        </Titulo>
        <NovosLivrosContainer>
          {livros.map((livro) => (
            <img
              src={livro.src}
              style={{
                width: imagensLivros.larguraPadrao,
                height: imagensLivros.alturaPadrao,
              }}
            />
          ))}
        </NovosLivrosContainer>
      </NovidadesDiv>
      <NovosCards>
        <CardRecomenda
          titulo="Talvez você se interesse por"
          subtitulo="Angular 11"
          descricao="Construindo uma aplicação com a plataforma Google"
          imagensLivros={imagensLivros.livro06}
        />
        <CardRecomenda
          titulo="Talvez você se interesse por"
          subtitulo="Typescript"
          descricao="Construindo uma aplicação em Typescript com Styled-Components"
          imagensLivros={imagensLivros.livro11}
        />
      </NovosCards>
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
