import React from 'react';
import SimpleImage from './SimpleImage';
import { Col, Row, Container } from 'react-bootstrap';

function InfoBoardCard(props) {
  const displayWidth = props.state.displayWidth
  const InfoCardImage = <SimpleImage className="image" pictureURL={props.infoCardData.infoCardPictureURL} altText={props.infoCardData.imageALT} />;
  const textSizeStyle = displayWidth >= 1200 ? { fontSize: 30 } : { fontSize: 20 }
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
      <Container fluid>
        <Row>
          <Col lg={9} className="infoElement infoText bordered" style={textSizeStyle}>{infoText}</Col>
          <Col lg={3} className="imageContainer infoElement bordered" style={imageContainerStyle}>{InfoCardImage}</Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container fluid>
      <Row>
        <Col lg={3} className="imageContainer infoElement bordered" style={imageContainerStyle}>{InfoCardImage}</Col>
        <Col lg={9} className="infoElement infoText bordered" style={textSizeStyle}> {infoText}</Col>
      </Row>
    </Container>
  );
}

export default InfoBoardCard;
