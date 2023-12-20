import perfil from "../../Imagens/perfil.svg";
import sacola from "../../Imagens/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
  cursor: pointer;

  @media screen and (max-width: 720px) {
    margin-right: 5px;
    }
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

`;

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img alt="" src={icone}></img>
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
