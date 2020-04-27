import React from 'react';
import {Image} from 'react-bootstrap';
import styled from 'styled-components'


const SimpleStyledImage = styled(Image)`
padding-top: 0 !important;
padding-bottom: 0 !important;
padding-left: 0 !important;
padding-right: 0 !important;
align-items: center !important;
position: relative;
overflow: hidden;
background: orange;
color: orange;
width: 100%;
`

function SimpleImage(props) {

    if (props.pictureURL && props.altText) {
        return (
            <SimpleStyledImage src={props.pictureURL} alt={props.altText} fluid/>);
    }
    return (
        <div>
            Could not load Picture
        </div>
    );
}

export default SimpleImage;
