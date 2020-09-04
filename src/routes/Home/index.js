import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Illustration from './Illustration'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F8F9FB;
`

export default () => {
 
    return (
        <Wrapper>
            <Header/>
            <Illustration/>
        </Wrapper>
    )
}