import styled from "styled-components";
import financeIllustration from '../../assets/finance-illustration1.svg';

export function WelcomeSection() {
    return (
        <LeftContainer>
            <WelcomeText>
                <h2>
                    Welcome to new age of finance
                </h2>
            </WelcomeText>

            <img src={financeIllustration}
                alt="Finance illustration"
            />
        </LeftContainer >
    );
}

const LeftContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
height: 60vh;
border-right: 1px solid rgb(177, 180, 167);
`;

const WelcomeText = styled.div`
display: block;
text-align: center;
padding: 10px;
word-wrap: normal;
width: 300px;
`;