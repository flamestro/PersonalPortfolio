import React from 'react';

function SimpleImage(props){
  if (props.pictureURL){
    return (
      <div className="imageContainer">
        <img src={props.pictureURL} width="100%" height="100%"></img>
      </div>);
    }
  return (
    <div>
      Could not load Picture
    </div>
  );
}

export default SimpleImage;
