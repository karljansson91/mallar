import React from 'react';
import styled from 'styled-components';
import CvIllustration from 'assets/svg/CvIllustration.svg'
import { Link } from 'react-router-dom'



const Wrapper = styled.div`
    display: flex;
    flex-direct: column;
    width 100%;
    justify-content: space-between;
`
const Title = styled.h3`
    margin-top: 100px;
    width: 50%;
`

const Text = styled.span`
    margin-top: 24px;
    width: 50%;
`
const LinkButton = styled(Link)`
    margin-top: 24px;
    padding: 12px;
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
const ButtonWrapper = styled.div`
    margin-top: 46px;
    width: 50%;
`
const InfoBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Illustration = styled.img`
    width: 50%;
`



export default () => {
    return (
        <Wrapper>
            <InfoBox>
                <Title>Skapa CV enkelt med våra mallar gratis</Title>
                <Text>Logga in, fyll i formuläret, välj mall, smidigare kan det inte bli att skapa ett CV.</Text>
                <ButtonWrapper>
                    <LinkButton>Skapa mitt CV</LinkButton>
                </ButtonWrapper>
            </InfoBox>
            <Illustration src={CvIllustration}/>
        </Wrapper>
    )
}