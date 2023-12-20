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
<<<<<<< HEAD
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
  margin-left: 6px;
  margin-bottom: 0.3px;
  cursor: pointer;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
=======
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
>>>>>>> 6727b37d63182ee38ee5258b417e0a57b34176d4
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
<<<<<<< HEAD
            <img alt=""
=======
            <img
>>>>>>> 6727b37d63182ee38ee5258b417e0a57b34176d4
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
          subtitulo="Angular 11 e Firebase"
          descricao="Construindo uma aplicação integrada com a plataforma do Google"
          subDescricao="Em aplicações web e mobile, a vasta gama de linguagens e ferramentas pode gerar dúvidas sobre o caminho a seguir. O livro destaca o Angular, uma plataforma facilitadora que combina templates, injeção de dependências e práticas de desenvolvimento. Kheronn Machado explora o Angular 11, abordando componentes, serviços, roteamentos e validação de formulários. O autor também demonstra a integração com o Firebase, do Google, incluindo recursos como banco de dados, autenticação e armazenamento de arquivos, proporcionando uma visão abrangente do desenvolvimento com Angular."
          imagensLivros={imagensLivros.livro06}
        />
        <CardRecomenda
          titulo="Talvez você se interesse por"
          subtitulo="Typescript"
          descricao="Construindo uma aplicação em Typescript com Styled-Components"
          subDescricao="Desenvolvido e mantido pela Microsoft, o TypeScript é um pré-processador open source de códigos JavaScript que auxilia na escrita de códigos, desde os mais simples até os mais complexos, utilizando tipagem de dados e os princípios da Orientação a Objetos para o desenvolvimento de aplicações front-end, back-end e mobile.

          Neste livro, Thiago da Silva Adriano abordará conceitos básicos do TypeScript, como tipagem básica, interfaces, decorators e Generics. Você vai aprender já com as mãos na massa, acompanhando o passo a passo desde a instalação do pré-processador até o desenvolvimento de uma API fazendo uso de tecnologias como Node.js, o banco de dados MongoDB e contêineres Docker."
          imagensLivros={imagensLivros.livro11}
        />
      </NovosCards>
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
