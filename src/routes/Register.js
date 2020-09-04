import React from 'react';
import styled from 'styled-components';
import singUpImg from 'assets/jpg/signup-image.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { registerUser } from 'api'



const SubmitButton = styled(Button)`
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    margin-bottom: 12px;
`


const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    height: 70%;
    background-color: white;
`

const Card = styled.div`
    width: 80%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direct: row;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 10px 18px #888888;
`

const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    background-color: white;
`

const SignUpImg = styled.img`
    width: 75%;
`

const Wrapper = styled.div`
    display: flex;
    background-color: #F8F9FB;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const Title = styled.h4`
    margin-bottom: 16px;
`



export default () => {
    let history = useHistory()
    const submit = async (event) =>{
        event.preventDefault()
            // Simple POST request with a JSON body using fetch

        await registerUser(
                event.currentTarget.email.value,
                event.currentTarget.password.value
        )
        history.push("/login");
    }
    return (
        <Wrapper>
            <Card>
                <ImgWrapper>
                    <SignUpImg src={singUpImg}/>
                </ImgWrapper>
                <LoginForm>
                    <Title>Skapa ny användare</Title>
                    <Form onSubmit={submit}>
                        <Form.Group controlId="email">
                            <Form.Control type="email" placeholder="email"/>
                        </Form.Group>

                        <Form.Group controlId="password1">
                            <Form.Control type="password" placeholder="ange lösenord"/>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Control type="password" placeholder="bekräfta lösenord"/>
                        </Form.Group>
                        <SubmitButton variant="light" type="submit">
                            {"Skapa konto"}
                        </SubmitButton>
                    </Form>
                    <div>
                        Har du redan ett konto? <Link to={"/login"}>Logga in här!</Link>
                    </div>
                </LoginForm>
            </Card>
        </Wrapper>
    )
}