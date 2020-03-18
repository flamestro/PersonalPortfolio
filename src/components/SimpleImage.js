import React from 'react';

function SimpleImage(props){
  if (props.pictureURL && props.altText){
    return (
      <div className="imageContainer">
        <img src={props.pictureURL} alt={props.altText} width="100%" height="100%"></img>
      </div>);
    }
  return (
    <div>
      Could not load Picture
    </div>
  );
}

export default SimpleImage;
