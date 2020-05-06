import React from "react"

import styled from "styled-components"

const StyledPhotoContainer = styled.div`
    background-color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    height: auto;
    min-width: 30%;
    max-width: 30%;
    margin-bottom: 0.6rem;

    @media screen and (max-width: 641px) {
        width: 100%;
        max-width: 100%;
        height: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`
const StyledPhoto = styled.a`
    color: #fff;
    text-decoration: none;

     @media screen and (max-width: 641px) {
        color: inherit;
        display: block;
        min-width: 100%;
    }
`
const StyledPhotoImage = styled.img`
    object-fit: scale-down;
    max-width: 100%;

    @media screen and (max-width: 641px) {
        object-fit: contain;
        width: 100%;
        height: auto;
    }
`
const StyledUserContainer = styled.div`
    position: relative; 
    top: calc(100% - 40px - 2rem);
    display: flex;
    opacity: 0;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    width: calc(100% - 2rem);
    transition: 200ms opacity linear;

    &:hover {
        opacity: 1;
    }

    @media screen and (max-width: 641px) {
        opacity: 1;
        top: 0%;
    }
`
const StyledDownloadNumber = styled.p`
    display: none;
    
    @media screen and (max-width: 641px) {
        display: block;
        text-align: right;
        padding: 0 1rem;
        width: calc(100% - 2rem);
    }
`

const PhotoBox = ({ photo }) => {
    const { userImageURL, largeImageURL, tags, webformatURL, user, downloads } = photo

    return (
        <StyledPhotoContainer>
            <StyledPhoto href={largeImageURL} target="blank">
                <StyledUserContainer>
                    <img alt="" src={userImageURL} style={{ height: "30px", width: "30px", borderRadius: "50%", marginRight: "10px" }}></img>
                    <p style={{ fontWeight: "600" }}>{user}</p>
                </StyledUserContainer>
                <StyledPhotoImage alt={tags} src={webformatURL}/>
            </StyledPhoto>
            <StyledDownloadNumber>{downloads} downloads</StyledDownloadNumber>
        </StyledPhotoContainer>
    )
}

export default PhotoBox