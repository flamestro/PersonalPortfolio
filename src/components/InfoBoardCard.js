import React from 'react';
import SimpleImage from './SimpleImage';
import {Col, Row, Container} from 'react-bootstrap';

function InfoBoardCard(props){
  const InfoCardImage = <SimpleImage className="image" pictureURL={props.infoCardData.infoCardPictureURL} altText={props.infoCardData.imageALT}/>;
  if(props.invert){
    return (
      <Container fluid>
        <Row>
          <Col lg={9} className="infoElement infoText bordered"> {props.infoCardData.description}</Col>
          <Col lg={3} className="imageContainer infoElement bordered">{InfoCardImage}</Col>
        </Row>
      </Container>
      );
  }
  return (
    <Container fluid>
      <Row>
        <Col lg={3} className="imageContainer infoElement bordered">{InfoCardImage}</Col>
        <Col lg={9} className="infoElement infoText bordered"> {props.infoCardData.description}</Col>
      </Row>  
    </Container>

    );
}

export default InfoBoardCard;
