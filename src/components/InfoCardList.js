import React from 'react'
import InfoBoardCard from './InfoBoardCard'

function InfoCardList(props){
  let toggle = true;
  const listItems = props.infoCardDataList.map((infoCardData) =>
  <InfoBoardCard infoCardData={infoCardData} key={infoCardData.id} invert={toggle = !toggle}/>);
  return (<div>
      {listItems}
    </div>
  );
}

export default InfoCardList;
