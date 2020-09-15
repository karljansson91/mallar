import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { FilePerson } from 'react-bootstrap-icons'
import { Dropdown } from 'react-bootstrap'
import { isLogin, deleteCookie } from 'utils'


const Wrapper = styled.div`
    display: flex;
    flex-direct: column;
    width 100%;
    height: 85px;
    align-items: center;
    justify-content: space-between;
    background-color: white;
`

const Logo = styled.a`
    border: 1px solid black;
    margin-left: 7%;
    padding: 7px;
    color: black;
    text-decoration: none;
    &:hover {
        text-decoration: none;
        color: black;
        cursor: pointer; 
    }
`

const RightMeny = styled.div`
    margin-right: 7%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Toggle = styled.a`
    padding: 10px;
    border-width: 0 0 5px 0;
    border-color: #0080FF;
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
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
    color: white;
    border: none;
    background-color: #0080FF;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        text-decoration: none;
        color: white;
        background-color: #006bff;
    }
`
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Toggle
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </Toggle>
));


export default ({children}) => {
    const history = useHistory();

    const logout = () => {
        deleteCookie('mallar')
        history.push('/')
    }

    return (
        <>
            <Wrapper>
                <Logo href={'/'}>CV-mallar</Logo>
                <RightMeny>
                    {!isLogin() ?
                        <React.Fragment>
                            <FilePerson/>
                            <LoginButton to="/login">Logga in</LoginButton>
                            <RegisterButton to="/register">Registrera</RegisterButton>    
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <FilePerson/>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    Kontoinställningar
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/konto">Konto uppgifter</Dropdown.Item>
                                    <Dropdown.Item href="/cv">Mina CV</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={logout}>Logga ut</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </React.Fragment>
                    }

                </RightMeny>
            </Wrapper>
            {children}
        </>
    )
}