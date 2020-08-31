import React from 'react';
import styled from 'styled-components';
import { ChevronUp, ChevronDown} from 'react-bootstrap-icons';
import Collapse from 'react-bootstrap/Collapse';

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${props => props.displayCard ? "1px solid white" : "1px solid #ced4da"};
    transition: all .5s ease;
`

const Title = styled.h5`
    color: #262b33;
    margin: 0px;
`

const ArrowUpIcon = styled(ChevronUp)`
    width: 24px;
    height: 24px;
    margin: 10px;
`

const ArrowDownIcon = styled(ChevronDown)`
    width: 24px;
    height: 24px;
    margin: 10px;
`

const InfoCard = ({title, displayCard=false, setDisplay, children}) => {
    
    return (
        <React.Fragment>
            <TitleWrapper onClick={setDisplay} displayCard={displayCard}>
                <Title>{title || ''}</Title>
                <div>
                    
                    {displayCard ? 
                        <ArrowUpIcon fill={'#B2B8BE'}/> :
                        <ArrowDownIcon  fill={'#B2B8BE'}/>
                    }
                </div>
            </TitleWrapper>
            <Collapse in={displayCard}>
                <div>
                    {children}
                </div>
            </Collapse>
        </React.Fragment>
    )
}

export default InfoCard