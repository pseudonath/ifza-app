import styled from "styled-components";
import ifzaLogo from "/ifza-logo.png";
import LoginForm from "../components/auth/login";

export default function LoginPage() {
  return (
    <Container>
      <Logo src={ifzaLogo} className="mb-16" width={100.35} height={28} alt="ifza-logo" />

      <LoginForm />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: -webkit-fill-available;
  padding-left: 24px;
  padding-right: 24px;
`;

const Logo = styled.img`
  width: 100.35px;
  height: 28px;
  margin-bottom: 60px;
`;
