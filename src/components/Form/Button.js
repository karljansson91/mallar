import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const ButtonText = styled.span`
    margin-left: 10px;
`

const SubmitButton = styled(Button)`
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
`


export default ({label, onClick}) => (
    <SubmitButton variant="light" onClick={onClick}>
        <ButtonText>{label}</ButtonText>
    </SubmitButton>
)