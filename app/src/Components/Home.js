import React, { useContext } from 'react'
import { SymbolContext } from 'Context/DataContext';
import DataFilter from './Datafilter/DataFilter'
import styled from 'styled-components'
import StockBarChart from './StockBarChart'
import EpsChart from './EpsChart'


const AppWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`

const DataWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`

const HalfBox = styled.div`
    display: flex;
    width: 45%;
    height: 400px;
    min-width: 600px;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
`

const Home = () => {
    const [symbols, _] = useContext(SymbolContext);
    return (
        <AppWrapper>
            <DataFilter/>
            <DataWrapper>
                <HalfBox>
                    <StockBarChart/>
                </HalfBox>
                <HalfBox>
                    <EpsChart/>
                </HalfBox>
            </DataWrapper>
        </AppWrapper>
    )
}

export default Home;