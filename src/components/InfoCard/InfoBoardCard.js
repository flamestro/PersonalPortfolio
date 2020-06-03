import React from 'react';
import styled from 'styled-components'

const LineWrapper = styled.div`
    width: 100%;
    height: 440px;
    overflow: hidden;
    display: block;
    @media (min-width: 600px) {
        height: 220px;
        position: relative;
    }
`

const TextContainer = styled.span`
    font-family: 'Roboto', sans-serif, monospace;
    font-size: 20px;
    display: block;
    background-color: white;
    height: 50%;
    width: 100%;
    border: solid 2px black;
    @media (min-width: 600px) {
        display:inline-block;
        width: 75%;
        height: 100%;
        position: absolute;
        top: 0;
        right: ${props => props.invert ? "0" : ""};
        left: ${props => props.invert ? "" : "0"};
    }
`

const CustomSimpleImage = styled.img`
    
    width: 100%;
    height: 50%;
    object-fit: cover;
    overflow: hidden;
    display: block;
    /*ImageContainer-Color*/
    background-color: #F0A856;
    border: solid 2px black;
    @media (min-width: 600px) {
        display: inline-block;
        position: absolute;
        max-width: 25%;
        top: 0;
        left: ${props => props.invert ? "0" : ""};
        right: ${props => props.invert ? "" : "0"};
        height: 100%;
    }
`;

const InfoText = (props) => {
    const textField = (
        <div>
            <b>{props.infoCardData.title}</b>
            {props.infoCardData.description}
            {props.infoCardData.usedTech ? <div><br/> <b>TechStack: </b>{props.infoCardData.usedTech} </div> : null}
        </div>
    )
    return textField
}

export const InfoBoardCard = (props) => {
    return (
        <>
            {
                props.invert ?
                    (
                        <LineWrapper>
                            <CustomSimpleImage invert={props.invert} src={props.infoCardData.infoCardPictureURL}
                                               alt={props.infoCardData.imageALT}/>
                            <TextContainer invert={props.invert}><InfoText infoCardData={props.infoCardData}/></TextContainer>
                        </LineWrapper>
                    )
                    :
                    (
                        <LineWrapper>
                            <TextContainer><InfoText infoCardData={props.infoCardData}/></TextContainer>
                            <CustomSimpleImage src={props.infoCardData.infoCardPictureURL}
                                               alt={props.infoCardData.imageALT}/>
                        </LineWrapper>
                    )
            }
        </>
    );
}