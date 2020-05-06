import React, { useState, useEffect } from 'react'
import { useFetch } from './Hooks/useFetch'

import Navbar from "./Components/Navbar"
import Photos from "./Components/Photos"
import Header from "./Components/Header"
import PageController from "./Components/PageController"

import styled from 'styled-components'

const StyledWrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    min-height: 100vh;

    background-color: ${props => props.darkMode ? "#000" : "#fff"};
    color: ${props => props.darkMode ? "#fff" : "#000"};
`

function App() {
  const getFormattedSearchForURL = (text) => { return text.split(' ').join('+') }
  const handleSearch = (newSearch) => { setSearch(newSearch) }
  const handleDarkMode = () => setDarkMode( !darkMode )

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const { data, loading, error } = useFetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_KEY}&q=${getFormattedSearchForURL(search)}&image_type=photo&per_page=21&page=${page}`) 

  useEffect(() => {
    setPage(1)
  }, [search])

  return (
    <StyledWrapper darkMode={darkMode}>
      <Navbar handleSearch={handleSearch} darkModeStatus={darkMode} handleDarkMode={handleDarkMode}/>
      <Header actualUserSearch={search} isError={error}/>

      <Photos 
        data={data} 
        loading={loading} 
      />

      <PageController 
        nextPageAction={() => {setPage(page + 1)}}
        prevPageAction={() => {page === 1 ? setPage(1) : setPage(page - 1)}} 
        actualPage={page}       
      />
    </StyledWrapper>
  )
}

export default App;
