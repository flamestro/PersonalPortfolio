import React from 'react';
import styled from 'styled-components'

const LineWrapper = styled.div`
width: 100%;
height: 220px;
overflow: hidden;
display: block;
position: relative;
`

const TextContainer = styled.span`
    position: absolute;
    top: 0;
    left: ${props => props.invert ? "0" : ""};
    right: ${props => props.invert ? "" : "0"};
    font-family: 'Roboto', sans-serif, monospace;
    font-size: 20px;
    display: inline-block;
    background-color: white;
    height: 100%;
    width: 100%;
    border: solid 2px black;
    @media (min-width: 600px) {
        width: 75%;
    }
`

const CustomSimpleImage = styled.img`
    position: absolute;
    top: 0;
    right: ${props => props.invert ? "0" : ""};
    left: ${props => props.invert ? "" : "0"};
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    display: inline-block;
    /*ImageContainer-Color*/
    background-color: #F0A856;
    border: solid 2px black;
    @media (min-width: 600px) {
       max-width: 25%;
    }
`;

function InfoBoardCard(props) {
    const infoText = (
        <div>
            <b>{props.infoCardData.title}</b>
            {props.infoCardData.description}
            {props.infoCardData.usedTech ? <div><br/> <b>TechStack: </b>{props.infoCardData.usedTech} </div> : null}
        </div>
    );
    return (
        <>
            {
                props.invert ?
                    (<LineWrapper>
                        <CustomSimpleImage invert={props.invert} src={props.infoCardData.infoCardPictureURL}
                                           alt={props.infoCardData.imageALT}/>
                        <TextContainer invert={props.invert}>{infoText}</TextContainer>
                    </LineWrapper>)
                    :
                    (<LineWrapper>
                        <TextContainer>{infoText}</TextContainer>
                        <CustomSimpleImage src={props.infoCardData.infoCardPictureURL}
                                           alt={props.infoCardData.imageALT}/>
                    </LineWrapper>)
            }
        </>
    );
}

export default InfoBoardCard;