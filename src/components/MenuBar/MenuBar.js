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
    z-index: 1;
    @media (min-width: 600px) {
        display: flex;
    }
`

const StyledMenuBarMobile = styled.div`
    overflow: hidden;
    /*MenuBarColor-Color*/
    background-color: #F0A856;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    @media (min-width: 600px) {
        display: none;
    }
`

const StyledHeadline = styled(Headline)`
    border: solid 2px black;
    cursor: pointer;
`;

const WrapperOuterBoxMobile = styled.div`
    overflow: hidden;
    height: 100%;
    opacity: 0.7;
    background-color: grey;
    position: absolute;
    display: block;
    top: 50px;
    width: 99%;
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
    const listItemsDesktop = props.menuItems.map((menuItemIterator, index) =>
        <MenuItem key={index} menuItem={menuItemIterator} menuItemAmount={menuItemAmount}/>);
    const listItemsMobile = props.menuItems.map((menuItemIterator, i) =>
        <MenuItem key={menuItemIterator.id} index={i} menuItem={menuItemIterator} mobile
                  menuItemAmount={menuItemAmount}/>);

    return (
        <>
            <StyledMenuBarDesktop menuItems={props.menuItems}>
                {listItemsDesktop}
            </StyledMenuBarDesktop>
            <StyledMenuBarMobile>
                <StyledHeadline onClick={toggleDroppedDown}>Menu</StyledHeadline>
                {droppedDown ? listItemsMobile : null}
                {droppedDown ? <WrapperOuterBoxMobile onClick={toggleDroppedDown}/> : null}
            </StyledMenuBarMobile>
        </>
    );
}