import React from 'react'
import InfoCardList from './InfoCardList'

function InfoBoard(props) {
  return (
    <InfoCardList state={props.state} infoCardDataList={props.infoCardDataList} />
  );
}

export default InfoBoard;
