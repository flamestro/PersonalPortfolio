import React from 'react';
import {MenuItem} from './MenuItem'
import styled from 'styled-components'

const StyledMenuBarDesktop = styled.div`
overflow: hidden;
/*MenuBarColor-Color*/
background-color: #F0A856;
width: 100%;

display: none;
z-index: 1;
@media (min-width: 600px) {
    display: block;
}
`

const StyledMenuBarMobile = styled.div`
overflow: hidden;
/*MenuBarColor-Color*/
background-color: #F0A856;
width: 100%;

display: block;
position: relative;

@media (min-width: 600px) {
    display: none;
}
`
export const MenuBar = props => {

        const menuItemAmount = props.menuItems.length
        const listItems = props.menuItems.map((menuItem) =>
            <MenuItem key={menuItem.id} menuItem={menuItem} menuItemAmount={menuItemAmount}/>);

        return (
            <>
                <StyledMenuBarDesktop menuItems={props.menuItems}>
                    {listItems}
                </StyledMenuBarDesktop>
                    <StyledMenuBarMobile>
                        Menu
                            {listItems}
                    </StyledMenuBarMobile>
            </>
        );
}