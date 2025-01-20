import styled from "styled-components";
import { LoginForm } from "../components/auth/LoginForm";
import { WelcomeSection } from "../components/auth/WelcomeSection";

export function LoginPage() {
    return (
        <MainContainer>
            <InnerContainer>
                <WelcomeSection />
                <LoginForm />
            </InnerContainer>
        </MainContainer >
    );
}

const MainContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: cornflowerblue;
  height: 100vh;
`;

const InnerContainer = styled.div`
 display: flex;
  min-width: 300px;
  max-width: 960px;
  width: 100%; 
  padding: 40px; 
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;