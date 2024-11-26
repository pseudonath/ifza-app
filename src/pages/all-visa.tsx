import { ArrowLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function AllVisaPage() {
  return (
    <>
      <Container>
        <HeaderContainer>
          <HeaderIconContainer>
            <ArrowLeft />
          </HeaderIconContainer>

          <HeaderText>All Visa</HeaderText>

          <HeaderIconContainer />
        </HeaderContainer>

        <ContentContainer>
          <NavLinkStyled to={""}>
            Raul Narcis Olarescu
            <ChevronRight style={{ width: "16px", height: "16px" }} />
          </NavLinkStyled>
          <NavLinkStyled to={""}>
            Daniel Henrique Oliveira Teixeira
            <ChevronRight style={{ width: "16px", height: "16px" }} />
          </NavLinkStyled>
          <NavLinkStyled to={""}>
            Brian Angus Aaron Hewitt
            <ChevronRight style={{ width: "16px", height: "16px" }} />
          </NavLinkStyled>
        </ContentContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 100%;
  min-height: 100vh;
  max-width: -webkit-fill-available;
  padding-left: 24px;
  padding-right: 24px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  height: 72px;
  width: 100%;
  border-bottom: 1px solid rgba(33, 32, 31, 0.2);
`;

const HeaderText = styled.text`
  display: block;
  margin-bottom: 8px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: #333;
`;

const HeaderIconContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 32px;
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  color: #333;
  text-decoration: none;
  padding: 16px;
  width: 100%;
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(to right, rgba(33, 32, 31, 0), rgba(33, 32, 31, 0.2), rgba(33, 32, 31, 0)) 1;
`;
