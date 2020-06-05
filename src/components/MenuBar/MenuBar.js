import React, {useState} from 'react';
import {MenuItem} from './MenuItem'
import styled from 'styled-components'
import {Headline} from "../Headline/Headline";

const StyledMenuBarDesktop = styled.div`
    overflow: hidden;
    /*MenuBarColor-Color*/
    background-color: #F0A856;
    width: 100%;
    
    display: none;
    @media (min-width: 600px) {
        display: flex;
    }
`

const StyledMenuBarMobile = styled.div`
    /*MenuBarColor-Color*/
    background-color: #F0A856;
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    @media (min-width: 600px) {
        display: none;
    }
`

const StyledHeadline = styled(Headline)`
    border: solid 2px black;
    cursor: pointer;
`;

const WrapperOuterBoxMobileMenuBar = styled.div`
    height: 3000px;
    opacity: 0.7;
    display: block;
    width: 100%;
    z-index: 1;
    background: linear-gradient(grey, white);
`;

const WrapperDroppedDownMenuItemsAbsolute = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
`;

const WrapperDroppedDownMenuItemsRelative = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
`;

export const MenuBar = props => {
    const [droppedDown, setDropDown] = useState(false);
    function Sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
    const toggleDroppedDown = async () => {
        await Sleep(100);
        setDropDown(!droppedDown);
    }
    const menuItemAmount = props.menuItems.length
    const listItems = props.menuItems.map((menuItemIterator, index) =>
        <MenuItem key={index} menuItem={menuItemIterator} menuItemAmount={menuItemAmount}/>);

    return (
        <>
            <StyledMenuBarDesktop menuItems={props.menuItems}>
                {listItems}
            </StyledMenuBarDesktop>
            <StyledMenuBarMobile>
                <StyledHeadline onClick={toggleDroppedDown}>Menu</StyledHeadline>
                {droppedDown ? <WrapperDroppedDownMenuItemsRelative>
                    <WrapperDroppedDownMenuItemsAbsolute>
                        {listItems}
                        <WrapperOuterBoxMobileMenuBar onClick={toggleDroppedDown}/>
                    </WrapperDroppedDownMenuItemsAbsolute>
                </WrapperDroppedDownMenuItemsRelative> : null}
            </StyledMenuBarMobile>
        </>
    );
}