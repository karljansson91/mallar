import React from 'react';
import Resume from './Resume'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Template = () => (
  <Wrapper>
      <Resume/>
  </Wrapper>
)


export default Template