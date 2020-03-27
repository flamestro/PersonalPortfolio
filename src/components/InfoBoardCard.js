import React from 'react';
import SimpleImage from './SimpleImage';
import { Col, Row, Container } from 'react-bootstrap';
import styled from 'styled-components'

const ImageContainer = styled(Col)`
padding-top: 0 !important;
padding-bottom: 0 !important;
padding-left: 0 !important;
padding-right: 0 !important;
align-items: center !important;
position: relative;
overflow: hidden;
background: orange;
color: orange;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid black;
`

const TextContainer = styled(Col)`
font-family: 'Roboto', sans-serif, monospace;
padding-top: 0 !important;
padding-bottom: 0 !important;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid black;
`

const ContainerStyled = styled(Container)`
width: 100%;
`

const WrappedImage = styled(SimpleImage)`
object-fit: cover;
max-height: 200px;
`

function InfoBoardCard(props) {
  const displayWidth = props.state.displayWidth
  const InfoCardImage = <WrappedImage pictureURL={props.infoCardData.infoCardPictureURL} altText={props.infoCardData.imageALT} />;
  const textSizeStyle = displayWidth >= 1400 ? { fontSize: 30 } : { fontSize: 20 }
  const imageContainerStyle = { maxHeight: 350 }
  const infoText = (
    <div>
      <b>{props.infoCardData.title}</b>
      {props.infoCardData.description}
      {props.infoCardData.usedTech ? <div><br /> <b>TechStack: </b>{props.infoCardData.usedTech} </div> : null}
    </div>
  );
  if (props.invert) {
    return (
      <ContainerStyled fluid>
        <Row>
          <TextContainer lg={9} style={textSizeStyle}>{infoText}</TextContainer>
          <ImageContainer lg={3} style={imageContainerStyle}>{InfoCardImage}</ImageContainer>
        </Row>
      </ContainerStyled>
    );
  }
  return (
    <ContainerStyled fluid>
      <Row>
        <ImageContainer lg={3} style={imageContainerStyle}>{InfoCardImage}</ImageContainer>
        <TextContainer lg={9} style={textSizeStyle}> {infoText}</TextContainer>
      </Row>
    </ContainerStyled>
  );
}

export default InfoBoardCard;