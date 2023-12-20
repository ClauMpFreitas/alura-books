import logo from "../../Imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;

  @media screen and (max-width: 720px) {
    font-size: 25px;
    text-align: center;
    margin-left: 5px;
    }
`;

const LogoImage = styled.img`
  margin-right: 10px;

  @media screen and (max-width: 720px) {
    margin-right: 5px;
    }
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
