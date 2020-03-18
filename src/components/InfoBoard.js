import React from 'react'
import InfoCardList from './InfoCardList'
import {Container} from 'react-bootstrap';

function InfoBoard(props) {


  return (
    <Container fluid className="infoContainer">
      <InfoCardList infoCardDataList={props.infoCardDataList}/>
    </Container>
);
}

export default InfoBoard;
