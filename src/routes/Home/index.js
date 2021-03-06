import React from 'react'
import styled from 'styled-components'
import Illustration from './Illustration'
import About from './About'
import Question from './Questions'
import Footer from './Footer'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F8F9FB;
    align-items: center;
`

export default () => {
 
    return (
        <Wrapper>
            <Illustration/>
            <About/>
            <Question/>
            <Footer/>
        </Wrapper>
    )
}