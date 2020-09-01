import React, {useState} from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import Summary from './Summary';
import Experiences from './Experiences';
import Skills from './Skills'
import Educations from './Educations'
import InfoCard from './InfoCard'

const Wrapper = styled.div`
  display: block;
  padding 24px;
`

export default ({cvId}) => {
  const [focusCard, setFocusCard] = useState('UserInfo')
  return (
    <Wrapper>
      <InfoCard title={'Personuppgifter'} displayCard={focusCard === 'UserInfo'} setDisplay={() => setFocusCard(focusCard === 'UserInfo' ? 'none' : 'UserInfo')} >
        <UserInfo cvId={cvId}/>
      </InfoCard>
      <InfoCard title={'Sammanfattning av erfarenheter'} displayCard={focusCard === 'Summary'} setDisplay={() => setFocusCard(focusCard === 'Summary' ? 'none' : 'Summary')}>
        <Summary cvId={cvId}/>
      </InfoCard>
      <InfoCard title={"Tidigare erfarenheter"} displayCard={focusCard === 'Experiences'} setDisplay={() => setFocusCard(focusCard === 'Experiences' ? 'none' : 'Experiences')}>
        <Experiences cvId={cvId}/>
      </InfoCard>
      <InfoCard title={"Utbildning"} displayCard={focusCard === 'Educations'} setDisplay={() => setFocusCard(focusCard === 'Educations' ? 'none' : 'Educations')}>
        <Educations cvId={cvId}/>
      </InfoCard>
      <InfoCard title={'Kompetens'} displayCard={focusCard === 'Skills'} setDisplay={() => setFocusCard(focusCard === 'Skills' ? 'none' : 'Skills')}>
        <Skills cvId={cvId}/>
      </InfoCard>
    </Wrapper>
  )
}