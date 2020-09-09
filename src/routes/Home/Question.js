import React, { useState } from 'react';
import styled from 'styled-components'
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

const CardTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const CardText = styled.span`
    margin: 12px;
    font-weight: bold;
`

const IconWrapper = styled.div`
    background-color: #D3E6FB;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    border-radius: 5px;
`


const Card = styled.div`
    width: 100%;
    background-color: white;
    margin: 5px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    text-align: left;
    flex-direction: column;
`

const Answer = styled.span`
    display: ${props => props.displayAnswer ? "flex" : "none"};
    margin-top: 15px;
    background-color: #F8F9FB;
    padding: 20px;
    border-radius: 5px;
    text-align: left;
`


export default ({question, answer}) => {
    const [displayAnswer, setDisplayAnswer] = useState(false)

    const toggleAnswer = () => {
        setDisplayAnswer(!displayAnswer)
    }
    
    return (
        <Card>
            <CardTitle>
                <CardText>
                    {question}
                </CardText>
                <IconWrapper>
                    <ChevronDown fill="#0080FF" width="34px" onClick={toggleAnswer}/>
                </IconWrapper>
            </CardTitle>
            <Answer displayAnswer={displayAnswer}>
                {answer}
            </Answer>
        </Card>
    )
}
