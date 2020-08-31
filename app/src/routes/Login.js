import React, { useState } from 'react';
import styled from 'styled-components';
import loginImg from 'assets/jpg/signin-image.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from 'api'



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

const LoginImg = styled.img`
    width: 75%;
`

const Wrapper = styled.div`
    display: flex;
    background-color: #D3D3D3;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const Title = styled.h1`
    margin-bottom: 16px;
`


export default () => {
    const [isInvalid, setIsInvalid] = useState(false) 
    const history = useHistory()
    const submit = async (event) =>{
        event.preventDefault()
        
        const email = event.currentTarget.email.value
        const password = event.currentTarget.password.value
        const loggedIn = await loginUser(email, password)

        if (loggedIn){
            history.push('/cv')
            return
        }
        setIsInvalid(true)        
    }

    return (
        <Wrapper>
            <Card>
                <ImgWrapper>
                    <LoginImg src={loginImg}/>
                </ImgWrapper>
                <LoginForm>
                    <Title>Logga in</Title>
                    <Form onSubmit={submit}>
                        <Form.Group controlId="email">
                            <Form.Control onChange={() => setIsInvalid(false)} isInvalid={isInvalid} type="email" placeholder="email"/>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Control onChange={() => setIsInvalid(false)} isInvalid={isInvalid} type="password" placeholder="lösenord"/>
                            <Form.Control.Feedback type="invalid">
                                Email eller lösenord fel.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <SubmitButton variant="light" type="submit">
                            {"Logga in"}
                        </SubmitButton>
                    </Form>
                    <Link to={"/register"}>Skapa ett nytt konto</Link>
                </LoginForm>
            </Card>
        </Wrapper>
    )
}