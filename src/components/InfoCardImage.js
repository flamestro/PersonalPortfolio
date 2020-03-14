import React from 'react';

function InfoCardImage(props){
  if (props.infoCardData){
    return (
        <img className="image" alt={props.infoCardData.imageALT} src={props.infoCardData.infoCardPictureURL}></img>);
    }
  return (
    <div>
      Could not load Picture
    </div>
  );
}

export default InfoCardImage;
