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
    position: relative;
           
    @media (min-width: 600px) {
        transition: background-color 1s;
        border: solid 2px black;
        display: inline-block;
        width: ${props => 100 / props.menuItemAmount}%;
        &:before {
                background-color: #F0A856;
                content: '';
                display:block;
                position:absolute;
                width: 0;
                left: 0;
                height: 2px;
                top: 80%;
                transition: width 0.5s, left 0.5s, background-color 1s;
              }
        &:hover {
          background-color: #F0AA0A;
          &:before {
                content: '';
                display:block;
                position:absolute;
                width: 50%;
                left: 25%;
                height: 2px;
                background-color: white;
                top: 80%;
              }
        }
    }
`
export const MenuItem = (props) =>{
    return (
        <MenuItemElement index={props.index} mobile={props.mobile} href={props.menuItem.link} menuItemAmount={props.menuItemAmount} target="_blank">
            {props.menuItem.name}
        </MenuItemElement>
    );
}
