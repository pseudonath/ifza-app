import { ChevronRight, Landmark, Menu } from "lucide-react";
import styled from "styled-components";
import ifzaLogo from "/ifza-logo.png";
import ifzaLicenseApplication from "/license-app.svg";
import ifzaLicenseRequest from "/license-req.svg";
import ifzaVisaApplication from "/visa-app.svg";
import ifzaVisaRequest from "/visa-req.svg";

export default function HomePage() {
  return (
    <>
      <Container>
        <HeaderContainer>
          <img src={ifzaLogo} width={80} height={22.32} alt="ifza-logo" />

          <HeaderIconContainer>
            <Menu />
          </HeaderIconContainer>
        </HeaderContainer>

        <ContentContainer>
          <SectionTitle>What's New</SectionTitle>

          <BannerContainer>
            <span style={{ display: "flex", alignItems: "center", backgroundColor: "#FFF9ED", padding: "10px", borderRadius: "25px" }}>
              <Landmark style={{ color: "#CFA92E" }} />
            </span>

            <BannerText>
              <span style={{ fontSize: "14px" }}>IFZA Banking Services</span>
              <span style={{ fontSize: "18px", fontWeight: "600" }}>Corporate Banking. Made Easier.</span>
            </BannerText>

            <ChevronRight style={{ color: "#FFF9ED" }} />
          </BannerContainer>

          <SectionTitle>Our Services</SectionTitle>
          <ServicesContainer>
            <ServiceItem>
              <img src={ifzaLicenseApplication} alt="" />
              <ServiceName>
                License <br /> Application
              </ServiceName>
            </ServiceItem>

            <ServiceItem>
              <img src={ifzaLicenseRequest} alt="" />

              <ServiceName>
                Visa <br /> Application
              </ServiceName>
            </ServiceItem>

            <ServiceItem>
              <img src={ifzaVisaApplication} alt="" />

              <ServiceName>
                License <br /> Letter Request
              </ServiceName>
            </ServiceItem>

            <ServiceItem>
              <img src={ifzaVisaRequest} alt="" />

              <ServiceName>
                Visa <br /> Request
              </ServiceName>
            </ServiceItem>
          </ServicesContainer>
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

const HeaderIconContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  padding-top: 32px;
`;

const SectionTitle = styled.text`
  display: block;
  margin-bottom: 8px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  max-width: -webkit-fill-available;
  background: linear-gradient(to right, #e3be47, #cda72c);
  padding: 16px;
  margin-bottom: 32px;
`;

const BannerText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 24px;
  color: #fff9ed;
  width: 90%;
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  max-width: -webkit-fill-available;
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(33, 32, 31, 0.1);
  background: #fefefe;
`;

const ServiceName = styled.text`
  display: block;
  margin-bottom: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;
