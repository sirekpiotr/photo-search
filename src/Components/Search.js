import React, { useState } from "react"
import styled from "styled-components"

const StyledSearchWrapper = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 35%;
    padding: 0.7rem 1rem;
    background-color: #f3f3f3;
    border-radius: 10px;

    @media screen and (max-width: 641px) {
        order: 2;
        padding: 20px 10px;
        margin-top: 20px;
        margin-bottom: 30px;
        width: calc(100% - 20px);
    }
`
const StyledSearchInput = styled.input`
    width: 90%;
    height: auto;
    font-size: 1rem;
    border: none;
    background-color: transparent;

    &:focus {
        outline-style: none;
        box-shadow: none;
        border-color: transparent;
    }

    @media screen and (max-width: 641px) {
        width: auto;
    }
`
const StyledSubmitInput = styled.input`
    border: none;
    background: transparent;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline-style: none;
        box-shadow: none;
        border-color: transparent;
    }
`

function Search({ handleSearch }) {
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(search)
    } 

    return (
        <StyledSearchWrapper onSubmit={handleSubmit}>
            <StyledSearchInput 
                placeholder="Search photo" 
                type="text" 
                value={search} 
                onChange={(e) => { setSearch(e.target.value) }}
            />

            <StyledSubmitInput 
                type="submit"
                value="Go" 
            />
        </StyledSearchWrapper>
    )
}

export default Search