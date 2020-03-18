import React from 'react';
import SimpleImage from './SimpleImage';

function InfoBoardCard(props){
  const InfoCardImage = <SimpleImage className="image" pictureURL={props.infoCardData.infoCardPictureURL} altText={props.infoCardData.imageALT}/>;
  if(props.invert){
    return (
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div className="row">
      <div className="infoElement infoText col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 bordered"> {props.infoCardData.description}</div>
      <div className="imageContainer infoElement col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 bordered">{InfoCardImage}</div>
      </div>
      </div>
      );
  }
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <div className="row">
    <div className="imageContainer infoElement col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 bordered">{InfoCardImage}</div>
    <div className="infoElement infoText col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 bordered"> {props.infoCardData.description}</div>
    </div>
    </div>
    );
}

export default InfoBoardCard;
