import React from 'react';
import styled from 'styled-components';
import CvIllustration from 'assets/svg/CvIllustration.svg'
import { LinkButton } from 'components/Button'
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

const ButtonWrapper = styled.div`
    margin-top: 76px;
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