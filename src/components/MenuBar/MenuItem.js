import React from 'react';
import styled from 'styled-components'

const MenuItemElement = styled.a`
    display: block;
    width: 100%;
    position: ${props => props.mobile ? "absolute" : "static"};
    top:  ${props => props.mobile ? (props.index*40 + 40) : 0}px;
    right: 0;
    text-align: center;
    border: solid 2px black;
    border-left: solid 4px black;
    border-right: solid 4px black;
    text-decoration: none !important;
    color: white !important;
    font-size: 25px;
    background-color:  #F0A856;
    z-index: 10;
    @media (min-width: 600px) {
        border: solid 2px black;
        position: relative !important;
        display: inline-block;
        width: ${props => 100 / props.menuItemAmount}%;
    }
`
export const MenuItem = (props) =>{
    return (
        <MenuItemElement index={props.index} mobile={props.mobile} href={props.menuItem.link} menuItemAmount={props.menuItemAmount} absolutetarget="_blank" rel="noopener noreferrer">
            {props.menuItem.name}
        </MenuItemElement>
    );
}
