import React from "react"

import styled from "styled-components"

const PageControllerContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
`
const StyledPaginationButton = styled.button`
    border: none;
    font-weight: 600;
    font-size: 1rem;
    margin: 0 2rem;
    color: inherit;
    background-color: transparent;
    width: 150px;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: 0;
    }

    @media screen and (max-width: 641px) {
        font-size: 0.8rem;
    }
`

function PageController(props) {
    return (
        <PageControllerContainer>
            <StyledPaginationButton onClick={() => props.prevPageAction()}>Previous page</StyledPaginationButton>
            <p>{props.actualPage}</p>
            <StyledPaginationButton onClick={() => props.nextPageAction()}>Next page</StyledPaginationButton>
        </PageControllerContainer>
    )
}

export default PageController