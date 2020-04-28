import React from 'react';
import styled from 'styled-components'

const MenuItemElement = styled.a`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/*MenuItemElement-Color*/
background: #F0A856;
font-size: 1.5rem;
padding-top: 5px;
padding-bottom: 5px;
color: #fff;
box-shadow: rgb(255,99,71) 0px 0.15rem 0.5rem, rgb(255,127,80) 0px 0.075rem 0.175rem;
height: 100%;
width: 100%;
border-radius: 4px;
transition: all 500ms;
overflow: hidden;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
z-index: 100;

&:hover {
  box-shadow: rgb(255,99,71) 1.175px 0.35em 1.175em, rgb(255,127,80) 1.175px 0.175em 0.5em;
  transform: translateY(-3px) scale(1.01);
  cursor: pointer;
  z-index: 100;
  color:white;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-user-select: none;
  -webkit-touch-callout: none
}
`

function MenuItem(props) {

    return (
        <MenuItemElement href={props.menuItem.link} target="_blank" rel="noopener noreferrer">
            {props.menuItem.name}
        </MenuItemElement>
    );
}

export default MenuItem;
