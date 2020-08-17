import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import { DataContext, SymbolContext } from 'Context/DataContext'
import { 
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineSeries,
    Hint,
    DiscreteColorLegend,
    Highlight,
    Borders
} from 'react-vis';

const BarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const formatDate = (d) => {
    let date = new Date(d)
    var month = date.getMonth()+1;
    var day = date.getDate();
    var year = date.getFullYear();

    return year + "/" + month + "/" + day;
}



const BarChart = () => {
    const [data, setData] = useContext(DataContext);
    const [symbols, setSymbols] = useContext(SymbolContext)
    const [hoverPoint, setHoverPoint] = useState(null)
    const [lastDrawLocation, setLastDrawLocation] = useState(null)
    const [parsedData, setparsedData] = useState([])

    useEffect(() => {
        const newParsedData = Object.keys(data).map((company) => {
            return data[company]['data'].map(point => {
                point.x = new Date(point.x)
                return point
            })}
        );
        setparsedData(newParsedData)
    }, [data]);
      
    const onNearestX = (value, { index }) => {
        setHoverPoint(value)
    }
    
    const filter = (area) => {
        setLastDrawLocation(area)
    }

    if(!Boolean(Object.keys(data).length)) return <div>No data</div>
        
    return (
        <BarWrapper>
            <XYPlot
                width={600}
                height={400}
                xDomain={
                    lastDrawLocation && [
                      lastDrawLocation.left,
                      lastDrawLocation.right
                    ]
                }
            >
                <VerticalGridLines />
                <HorizontalGridLines />
                {parsedData.map((data, index) => (
                    <LineSeries
                        key={index}
                        data={data}
                        onNearestX={onNearestX}
                    />
                ))}
                
                <Borders style={{
                    bottom: {fill: '#fff'},
                    left: {fill: '#fff'},
                    right: {fill: '#fff'},
                    top: {fill: '#fff'}
                }}/>
                {hoverPoint && (
                <Hint value={hoverPoint} style={{
                    fontSize: 14,
                    text: {
                    display: 'none'
                    },
                    value: {
                    color: 'red'
                    }
                }}>
                </Hint>
                )}
                <XAxis 
                    title="Date" 
                    tickFormat={d => formatDate(d)}
                    tickTotal={6}
                    style={{
                        text: {fontSize: '16px'}
                    }}
                />
                <YAxis />
                <Highlight
                    enableY={false}
                    onBrushEnd={area => filter(area)}
                />
            </XYPlot>
            <DiscreteColorLegend items={Object.values(symbols)}/>
        </BarWrapper>
    )
}

export default BarChart