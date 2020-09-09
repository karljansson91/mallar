import React from 'react';
import CvTemplates from 'assets/CvTemplates.png'
import Heart from 'assets/svg/heart.svg'
import { Card } from 'components/Card'
import styled from 'styled-components'
import BookIcon from 'assets/svg/address-book.svg'
import CvCard from 'assets/svg/address-card.svg'
import RocketIcon from 'assets/svg/rocket.svg'



const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width 100%;
    justify-content: center;
`

const Title = styled.h3`
    margin-top: 60px;
    margin-bottom: 48px;
    width: 75%;

`

const CardIcon = styled.img`
    width: 46px;
    margin: 12px;
`

const CardText = styled.span`
    margin: 12px;
    font-weight: bold;
`

const CvImages = styled.img`
    width: 75%;
`

const InfoBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CardWrapper = styled.div`
    margin-top: 112px;
    width: 50%;
    display: flex;
    flex-direction: column;
`

const CardRow = styled.div`
    display: flex;
    flex-direction: row;
`


const ButtonWrapper = styled.div`
    width: 100%;
`


export default () => {
    return (
        <Wrapper>
            <InfoBox>
                <Title>
                    Om oss
                </Title>
                <CvImages src={CvTemplates}/>
            </InfoBox>
            <CardWrapper>
                <CardRow>
                    <Card>
                        <CardIcon src={CvCard}/>
                        <CardText>Välj mellan våra mallar och skapa ett professionelt CV.</CardText>
                    </Card>
                    <Card>
                        <CardIcon src={Heart}/>
                        <CardText>Vår tjänst är helt gratis och till för att du ska landa ditt drömjobb.</CardText>
                    </Card>
                </CardRow>
                <CardRow>
                    <Card>
                        <CardIcon src={RocketIcon}/>
                        <CardText>Att skapa ett CV är mycket enkelt, fyll i formuläret och ladda ner det som pdf.</CardText>
                    </Card>
                    <Card>
                        <CardIcon src={BookIcon}/>
                        <CardText>Se hur ditt CV mall uppdateras i realtid samtidigt som du fyller i formuläret med vår CV editor.</CardText>
                    </Card>
                </CardRow>
            </CardWrapper>
        </Wrapper>
    )
}