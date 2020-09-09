import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    width 100%;
    justify-content: space-around;
    background-color: #0080FF;
    margin-top: 78px;
    padding: 36px;
`

const Logo = styled.div`
    border: 2px solid white;
    padding: 7px;
    color: white;
    font-weight: bold;
    text-align: center;
    margin: auto;
`

const Link = styled.a`
    color: white;
`

const Row = styled.div`
    color: white;
    width: 20%;
    display: flex;
    flex-direction: column;
`

export default () => {
    return (
        <Wrapper>
            <Row>
                <Logo>CV-mallar</Logo>
            </Row>
            <Row>
                <h5>Resurser</h5>
                <Link>Cv mallar</Link>
                <Link>Cv hjälp</Link>
                <Link>Cv exempel</Link>
            </Row>
            <Row>
                <h5>Företaget</h5>
                <Link>Om oss</Link>
                <Link>Kontakta oss</Link>
            </Row>
            <Row>
                <h5>Support</h5>
                <Link>FAQ</Link>
                <Link>Vilkor</Link>
                <Link>Cookies hos oss</Link>
            </Row>
        </Wrapper>
    )
}