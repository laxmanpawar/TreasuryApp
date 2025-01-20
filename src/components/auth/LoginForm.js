import styled from "styled-components";
import { FormInput } from "./FormInput";
import Logo from "../../assets/logo.svg";

export function LoginForm() {
    const formInputs = [
        { label: "Username", type: "text", placeholder: "Enter your username" },
        { label: "Customer Code", type: "text", placeholder: "Enter Customer Code" },
        { label: "Password", type: "password", placeholder: "Enter your password" }
    ];
    console.log(formInputs)

    const onSubmit = (event) => {
        event.preventDefault();

        console.log(event.target[0].value);
        console.log(event.target[1].value);
        console.log(event.target[2].value);
    };

    return (
        <RightContainer>
            <LogoContainer></LogoContainer>
            <LoginFormContainer>
                <div className={styles.form_control}>
                    <label htmlFor="name">Username</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Customer Code</label>
                    <input type="email" name="email" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="text">Password</label>
                    <input type="password" name="password" />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                    }}
                >
                    <Button text="SUBMIT BUTTON" />
                </div>

                <div>{name + " " + email + " " + text}</div>
            </LoginFormContainer>

        </RightContainer>
    );
}

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const LogoContainer = styled.div`

`;

const LoginFormContainer = styled.form`

`;