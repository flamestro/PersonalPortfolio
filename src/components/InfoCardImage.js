import React from 'react';

function InfoCardImage(props){
  if (props.infoCardData){
    return (
      <div className="imageContainer">
        <img src={props.infoCardData.infoCardPictureURL} width="100%" height="100%"></img>
      </div>);
    }
  return (
    <div>
      Could not load Picture
    </div>
  );
}

export default InfoCardImage;
