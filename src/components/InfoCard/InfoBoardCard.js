import React from 'react';
import styled from 'styled-components'

const LineWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

`

const TextContainer = styled.span`
    background-color: white;
    font-family: 'Roboto', sans-serif, monospace;
    font-size: 20px;
    width: 100%;
    border: solid 1px black;
    height: 220px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    @media (min-width: 600px) {
        flex: 3;
        order ${props => props.invert ? "1" : "2"};
    }
`

const CustomSimpleImage = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    overflow: hidden;
    background-color: #F0A856;
    border: solid 2px black;
    @media (min-width: 600px) {
        flex: 1;
        order ${props => props.invert ? "2" : "1"};
    }
`;

const InfoText = (props) => {
    return (
        <div>
            <b>{props.infoCardData.title}</b>
            {props.infoCardData.description}
            {props.infoCardData.usedTech ? <div><br/> <b>TechStack: </b>{props.infoCardData.usedTech} </div> : null}
        </div>
    )
}

export const InfoBoardCard = (props) => {
    return (
        <>
            <LineWrapper>
                <CustomSimpleImage src={props.infoCardData.infoCardPictureURL}
                                   alt={props.infoCardData.imageALT}
                                   invert={props.invert}/>
                <TextContainer invert={props.invert}><InfoText infoCardData={props.infoCardData}/></TextContainer>
            </LineWrapper>
        </>
    );
}