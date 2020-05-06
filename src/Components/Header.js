import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 3rem;
    width: calc(100% - 6rem);
    height: auto;

    @media screen and (max-width: 641px) {
        padding: 0 1rem;
        flex-direction: column;
        align-items: flex-start;
    }
`
const HeaderText = styled.span`
    font-size: 1.4rem;
    font-weight: 600;

    @media screen and (max-width: 641px) {
        font-size: 1.8rem;
        font-weight: normal;
    }
`

const Header = ({ actualUserSearch,  }) => {
    return (
        <StyledHeader>
            <HeaderText>Your search results for {actualUserSearch === '' ? "popular" : actualUserSearch} photos</HeaderText>
        </StyledHeader>
    )
}

export default Header