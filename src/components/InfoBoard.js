import React from 'react'
import InfoCardList from './InfoCardList'

function InfoBoard(props) {


  return (
    <div className="infoContainer row">
      <InfoCardList infoCardDataList={props.infoCardDataList}/>
    </div>
);
}

export default InfoBoard;
