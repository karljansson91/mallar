import React from 'react';
import styled from 'styled-components'
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import Question from './Question'
import { LinkButton } from 'components/Button'



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Title = styled.h3`
    margin-top: 60px;
    margin-bottom: 26px;
    width: 75%;

`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 36px;
`

const CardRow = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    margin: 12px;
`

const MoreInfoText = styled.span`
    margin-bottom: 12px;
    font-weight: bold;
`

const Line = styled.div`
    width: 35px;
    border: solid 2px #0080FF;
`


export default () => {
    return (
        <Wrapper>
                <Title>
                    Vanliga frågor
                </Title>
                <Line/>
                <CardWrapper>
                    <CardRow>
                        <Question question="Är det gratis att skapa ett CV?" answer="Ja, allt i vår tjänst är gratis! Många andra låter användare fylla i CV men tar betalt för att ladda ner, men inte vi!"/>
                        <Question question="Kan jag ladda ner mitt CV i pdf?" answer="Ja, det går att ladda ner i pdf format. I framtiden kommer vi även erbjuda word-format."/>
                        <Question question="Kan jag skapa flera CV?" answer="Ja, hos oss går det att skapa hur många CV som helst och det är helt gratis."/>
                    </CardRow>
                    <CardRow>
                        <Question question="Hur sparas mitt CV?" answer="Ja, när du gör en användare hos oss så sparar vi ditt CV i molnet. Detta gör att du när som helst kan komma tillbaka, logga in och ändra eller ladda ner ditt CV."/>
                        <Question question="Hur kan er tjänst vara gratis när alla andra kostar pengar?" answer="CV mallar är för närvarande ett hobby projekt vars mål är att göra det lättare för alla att skapa CV. Vi kommer aldrig ta betalt för att skapa och ladda ner ett CV."/>
                        <Question question="Hur börjar man att skapa ett CV?" answer="Skapa ett konto, logga in och börja editera. Så enkelt är det!"/>
                    </CardRow>
                </CardWrapper>
                <MoreInfoText>Fler frågor?</MoreInfoText>
                <LinkButton>Kontakta oss</LinkButton>
        </Wrapper>
    )
}