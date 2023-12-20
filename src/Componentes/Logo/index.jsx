import logo from "../../Imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
<<<<<<< HEAD

  @media screen and (max-width: 720px) {
    font-size: 25px;
    text-align: center;
    margin-left: 5px;
    }
=======
>>>>>>> 6727b37d63182ee38ee5258b417e0a57b34176d4
`;

const LogoImage = styled.img`
  margin-right: 10px;
<<<<<<< HEAD

  @media screen and (max-width: 720px) {
    margin-right: 5px;
    }
=======
>>>>>>> 6727b37d63182ee38ee5258b417e0a57b34176d4
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="logo" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </LogoContainer>
  );
}

export default Logo;
