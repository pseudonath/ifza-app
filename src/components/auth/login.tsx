import styled from "styled-components";
import ifzaLogo from "/ifza-logo.png";
import { Link } from "react-router-dom";
import NavLinkAuth from "../nav-link";

export default function LoginPage() {
  return (
    <Container>
      <Logo src={ifzaLogo} className="mb-16" width={100.35} height={28} alt="ifza-logo" />

      <FormContainer>
        <NavLinkAuth />

        <FormGroup>
          <Input type="email" id="email" placeholder="Your username" required />
        </FormGroup>
        <FormGroup>
          <Input type="password" id="password" placeholder="Your password" required />
        </FormGroup>

        <SubmitButton type="submit">Login</SubmitButton>

        <Label>Forgot Password?</Label>
      </FormContainer>

      <div style={{ display: "flex", gap: "6px", marginBottom: "40px" }}>
        <Label>Don't have an account?</Label>{" "}
        <LinkStyled to={"/signup"}>
          <Label>Sign Up</Label>
        </LinkStyled>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  height: 100%;
  min-height: 100vh;
  max-width: -webkit-fill-available;
  padding-left: 24px;
  padding-right: 24px;
`;

const Logo = styled.img`
  width: 100.35px;
  height: 28px;
  margin-top: 100px;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #333;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  color: #333;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: -webkit-fill-available;

  &:focus {
    outline: none;
    border-color: #21201f;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.2);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #21201f;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 16px;

  &:hover {
    background-color: #222;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;
