import React, { useState, useContext } from 'react'
import { DataContext, SymbolContext, EpsContext } from 'Context/DataContext'
import deteteIcon from 'assets/svg/delete.svg'
import {
  Input,
  Wrapper,
  Button,
  Symbol,
  DeleteIcon,
  Suggestion,
  SuggestionName,
  SuggestionSymbol,
  SuggestionWrapper
} from './styled'


const setStockData = async (value, data, setData) => {
  const response = await fetch(`http://localhost:8000/data/${value}`)
  if(response.ok){
    const company_data = await response.json()
    const new_data = {...data, [value]: company_data}
    setData(new_data)
  }

}

const setEpsData = async (value, data, setEps) => {
  const response = await fetch(`http://localhost:8000/eps/${value}`)
  if(response.ok){
    const company_data = await response.json()
    const new_data = {...data, [value]: company_data}
    setEps(new_data)
  }

}

const DataFilter = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([])
  const [symbols, setSymbols] = useContext(SymbolContext)
  const [data, setData] = useContext(DataContext);
  const [eps, setEps] = useContext(EpsContext);

  const handleChange = async (event) => {
    const value = event.target.value
    setInput(value)
    if (value.length > 1) {
      const response = await fetch(`http://localhost:8000/search/${value}`) 
      if(response.ok){
        const search_result = await response.json()
        setSuggestions(search_result)
      }
    }
  }

  const handleSelectSearch = async (event) => {
    const value = event.currentTarget.getAttribute('value')
    const name = event.currentTarget.getAttribute('name')
    setInput("")
    setSymbols({...symbols, [value]: name })
    await setStockData(value, data, setData)
    await setEpsData(value, eps, setEps)
    setSuggestions([]) 
  }

  const handleDelete = (event) => {
    const id = event.target.value
    const new_data = {...data}
    const new_symbols = {...symbols}
    delete new_data[id]
    delete new_symbols[id]
    setSymbols(new_symbols)
    setData(new_data)

  }

  return (
      <Wrapper>
        <Input type="text" placeholder="Symbol" value={input} onChange={handleChange}/>
        <SuggestionWrapper>
          {suggestions.map((suggestion, i) => (
            <Suggestion key={i} value={suggestion.symbol} name={suggestion.name} onClick={handleSelectSearch}>
              <SuggestionName>{suggestion.name.substring(0,15)}</SuggestionName>
              <SuggestionSymbol>{suggestion.symbol} {suggestion.region}</SuggestionSymbol>
            </Suggestion>
          ))}
        </SuggestionWrapper>
        {Object.keys(symbols).map((id, i) => (
          <Symbol key={i}>
            { symbols[id] }
            <DeleteIcon type="image" value={id} src={deteteIcon} onClick={handleDelete}/>
          </Symbol>
        ))}  
      </Wrapper>
  )
}

export default DataFilter;