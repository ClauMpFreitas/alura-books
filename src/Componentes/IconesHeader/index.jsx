import perfil from "../../Imagens/perfil.svg";
import sacola from "../../Imagens/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
  cursor: pointer;
<<<<<<< HEAD

  @media screen and (max-width: 720px) {
    margin-right: 5px;
    }
=======
>>>>>>> 6727b37d63182ee38ee5258b417e0a57b34176d4
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
<<<<<<< HEAD
  gap: 8px;

=======
>>>>>>> 6727b37d63182ee38ee5258b417e0a57b34176d4
`;

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
<<<<<<< HEAD
          <img alt="" src={icone}></img>
=======
          <img src={icone}></img>
>>>>>>> 6727b37d63182ee38ee5258b417e0a57b34176d4
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
