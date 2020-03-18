import React from 'react';
import {Image} from 'react-bootstrap';

function SimpleImage(props){
  if (props.pictureURL && props.altText){
    return (
        <Image className="imageContainer" src={props.pictureURL} alt={props.altText} width="100%" height="100%"/>);
    }
  return (
    <div>
      Could not load Picture
    </div>
  );
}

export default SimpleImage;
