import React from "react"
import PhotoBox from './PhotoBox'

import styled from "styled-components"

const StyledPhotosWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.5rem 3rem;
    max-width: calc(100% - 6rem);
    height: auto;

    @media screen and (max-width: 641px) {
        max-width: 100%;
        padding: 0;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
`

const Photos = ({ data, loading }) => {
    return (
        <StyledPhotosWrapper>
            {data !== null && data.hits.map((photo) => (
                <PhotoBox key={photo.id} photo={photo}/>
            ))}
        </StyledPhotosWrapper>
    )
}

export default Photos