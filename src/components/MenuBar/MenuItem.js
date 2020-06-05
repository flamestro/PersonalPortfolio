import React from 'react';
import styled from 'styled-components'

const MenuItemElement = styled.a`
    display: block;
    width: 100%;
    text-align: center;
    border: solid 2px black;
    text-decoration: none !important;
    color: white !important;
    font-size: 25px;
    background-color:  #F0A856;
    @media (min-width: 600px) {
        border: solid 2px black;
        display: inline-block;
        width: ${props => 100 / props.menuItemAmount}%;
    }
`
export const MenuItem = (props) =>{
    return (
        <MenuItemElement index={props.index} mobile={props.mobile} href={props.menuItem.link} menuItemAmount={props.menuItemAmount} target="_blank">
            {props.menuItem.name}
        </MenuItemElement>
    );
}
