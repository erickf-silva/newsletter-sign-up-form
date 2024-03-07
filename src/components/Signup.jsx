import React, { useRef, useState } from "react";
import styled from "styled-components";

import illustrationDesktop from '../assets/illustration-sign-up-desktop.svg'
import illustrationMobile from '../assets/illustration-sign-up-mobile.svg'
import verifiedSymbol from '../assets/icon-list.svg'

function Singup() {
    const [errorEmail, setErrorEmail] = useState("");
    const [isActiveError, setIsActiveError] = useState(false);
    const [showState, setShowState] = useState(false);
    const inputRefEmail = useRef(null);
    const isMobile = window.innerWidth <= 701;

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const switchToSignup = () => {
        setShowState(false);
    }

    const currentEmailValue = () => {
        return inputRefEmail.current.value;
    }

    const submitEmail = (event) => {
        event.preventDefault();

        if (inputRefEmail.current.value === "" || !isValidEmail(inputRefEmail.current.value)) {
            setErrorEmail("Valid email required");
            setIsActiveError(true);
            setShowState(false);
        } else {
            setErrorEmail("");
            setIsActiveError(false);
            setShowState(true);
        }
    }

    const thankState = () => {
        return (
            <ThanksContainer>
                <Icon src={verifiedSymbol} alt="verified-symbol" />

                <ThanksTitle>Thanks for subscribing!</ThanksTitle>
                <ThanksParagraph>
                    A confirmation email has been sent to <Email>{currentEmailValue()}</Email>.
                    Please open it and click the button inside to confirm your subscription.
                </ThanksParagraph>

                <Button onClick={switchToSignup}>Dismiss message</Button>
            </ThanksContainer>
        );
    }

    const signupState = () => {
        return (
            <Container>
                <Info>
                    <Title>Stay updated!</Title>
                    <Paragraph>Join 60,000+ product managers receiving monthly updates on:</Paragraph>

                    <ul>
                        <List>
                            <img src={verifiedSymbol} />
                            <p>Product discovery and building what matters</p></List>
                        <List>
                            <img src={verifiedSymbol} />
                            <p>Measuring to ensure updates are a sucess</p>
                        </List>
                        <List>
                            <img src={verifiedSymbol} />
                            <p>And much more!</p>
                        </List>
                    </ul>

                    <Div>
                        <LabelBox>
                            <Label htmlFor="email" ref={inputRefEmail}>Email address</Label>
                            <ErrorState>{errorEmail}</ErrorState>
                        </LabelBox>
                        <Input
                            ref={inputRefEmail}
                            type="email"
                            placeholder="email@company.com"
                            style={{
                                borderColor: isActiveError ? "#ff2e2e" : "",
                                backgroundColor: isActiveError ? "#ffe0e0" : "",
                                color: isActiveError ? "#ff2e2e" : "",
                                placeholder: isActiveError ? "#ff2e2e" : ""
                            }}
                        />

                        <Button onClick={submitEmail}>Subscribe to monthly newsletter</Button>
                    </Div>
                </Info>

                <Img src={isMobile ? illustrationMobile : illustrationDesktop} alt="illustration-sign-up" />

            </Container>
        );
    }

    return (
        <>
            {showState ? <>{thankState()}</> : <>{signupState()}</>}
        </>
    );
}

const Container = styled.div`
        display: flex;
        align-items: center;
        background-color: #fff;
        box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.1);
        max-width: 710px;
        padding: 14px 14px 14px 30px;
        margin: 30px;
        border-radius: 24px;
    
        @media (max-width: 701px) {
            flex-direction: column-reverse;
            justify-content: start;
            gap: 20px;
            height: 100vh;
            margin: 0;
            padding: 0;
            border-radius: 0;
        }
`
const Info = styled.div`
        padding: 25px;
`
const Title = styled.h1`
        color: hsl(234, 29%, 20%);
        margin-bottom: 15px;
        font-size: 40px;
`
const Paragraph = styled.p`
        margin: 0 30px 20px 0;
`
const List = styled.li`
        display: flex;
        gap: 13px;
        margin-bottom: 10px;
        font-weight: 500;
`
const Div = styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin: 30px 0 20px 0;
`
const LabelBox = styled.div`
    display: flex;
    justify-content: space-between;
`
const Label = styled.label`
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        font-weight: 700;
        color: hsl(234, 29%, 20%);
`
const ErrorState = styled.span`
        color: #ff2e2e;
        font-size: 13px;
        font-weight: 700;
`
const Input = styled.input`
        padding: 16px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
`
const Button = styled.button`
background-color: hsl(234, 29%, 20%);
color: #fff;
font-weight: 500;
width: 100%;
padding: 14px;
border-radius: 6px;
border: none;
cursor: pointer;

&:hover {
    background: linear-gradient(to right, hsl(330, 97%, 58%), hsl(4, 100%, 67%));
}
`
const Img = styled.img`
        width: 300px;
        margin-left: 40px;
    
        @media (max-width: 701px) {
            width: 100%;
            margin: 0;
        }
`
const ThanksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: #fff;
    box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.1);
    max-width: 465px;
    padding: 50px;
    margin: 30px;
    border-radius: 30px;

    @media (max-width: 601px) {
        justify-content: center;
        height: 100vh;
        margin: 0;
        border-radius: 0;
    }
`
const Icon = styled.img`
    width: 50px;
`
const ThanksTitle = styled.h1`
    color: hsl(234, 29%, 20%);
    font-size: 46px;
`
const ThanksParagraph = styled.p`
    line-height: 25px;

    @media (max-width: 601px) {
        margin-bottom: 40%;
    }
`
const Email = styled.span`
    font-weight: 700;
`

export default Singup;