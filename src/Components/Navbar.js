import React from "react"
import styled from "styled-components"
import Search from "./Search"

const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 3rem;
    width: calc(100% - 6rem);
    height: 60px;

    @media screen and (max-width: 641px) {
        width: calc(100% - 2rem);
        padding: 3rem 1rem;
        height: auto;
        flex-direction: column;
        align-items: flex-start;
    }
`
const SiteTitle = styled.span`
    width: 10%;
    font-size: 1.2rem;

    @media screen and (max-width: 641px) {
        margin-bottom: 10px;
        display: block;
    }
`
const DarkModeToogleButton = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: inherit;
    background-color: inherit;
    font-weight: 600;
    text-align: left;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline-style: none;
        box-shadow: none;
        border-color: transparent;
    }
`

const Navbar = ({ handleSearch, darkModeStatus, handleDarkMode }) => {
    return (
        <NavbarWrapper>
            <SiteTitle>PhotoSearcher</SiteTitle>
            <Search handleSearch={handleSearch}/>
            <DarkModeToogleButton onClick={() => handleDarkMode()}>{darkModeStatus ? "Light mode" : "Dark mode"}</DarkModeToogleButton>
        </NavbarWrapper>
    )
}

export default Navbar