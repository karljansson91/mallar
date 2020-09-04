import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { FilePerson } from 'react-bootstrap-icons';


const Wrapper = styled.div`
    display: flex;
    flex-direct: column;
    width 100%;
    height: 85px;
    align-items: center;
    justify-content: space-between;
    background-color: white;
`

const Logo = styled.div`
    border: 1px solid black;
    margin-left: 7%;
    padding: 7px;
`

const LoginMeny = styled.div`
    margin-right: 7%;
`

const LoginButton = styled(Link)`
    padding: 10px;
    border-width: 0 0 5px 0;
    border-color: #0080FF;
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
`

const RegisterButton = styled(Link)`
    margin-left: 16px;
    padding: 10px;
    background-color: #0080FF;
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        text-decoration: none;
        color: white;
        background-color: #006bff;
    }
`


export default () => {
    return (
        <Wrapper>
            <Logo>CV-mallar</Logo>
            <LoginMeny>
                <FilePerson/>
                <LoginButton to="/login">Logga in</LoginButton>
                <RegisterButton to="/register">Registrera</RegisterButton>
            </LoginMeny>
        </Wrapper>
    )
}