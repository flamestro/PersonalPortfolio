import React from 'react';
import styled from 'styled-components'

const MenuItemElement = styled.a`
    display: block;
    position: absolute;
    width: 100%;
    
    text-align: center;
    border: solid 2px black;
    text-decoration: none !important;
    color: white !important;
    font-family: 'Roboto';
    font-size: 25px;
    
    &:nth-child(1) {
        top: 41;
    }   
    z-index: 10;
    @media (min-width: 600px) {
        position: relative !important;
        display: inline-block;
        width: ${props => 100 / props.menuItemAmount}%;
    }
    
`
export const MenuItem = (props) =>{
    return (
        <MenuItemElement href={props.menuItem.link} menuItemAmount={props.menuItemAmount} target="_blank" rel="noopener noreferrer">
            {props.menuItem.name}
        </MenuItemElement>
    );
}
