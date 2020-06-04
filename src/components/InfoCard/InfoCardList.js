import React from 'react'
import {InfoBoardCard} from './InfoBoardCard'
import styled from 'styled-components'

const MobileWrapper = styled.div`
display: block;

@media (min-width: 600px) {
    display: none;
}
`

const DesktopWrapper = styled.div`
display: none;
max-width: 100%;
min-width: 100%;
@media (min-width: 600px) {
    display: block;
}
`

const ListItemsDesktop = props => {
    let toggle = true;
    const list = props.infoCards.map((infoCardData) =>
        <InfoBoardCard infoCardData={infoCardData} key={infoCardData.id}
                       invert={toggle = !toggle}/>);
    return list;
}

const ListItemsMobile = props => {
    const list = props.infoCards.map((infoCardData) =>
        <InfoBoardCard infoCardData={infoCardData} key={infoCardData.id} invert={false}/>);
    return list;
}

export const InfoCardList = (props) => {
    return (
        <>
            <DesktopWrapper>
                <ListItemsDesktop infoCards={props.infoCards}/>
            </DesktopWrapper>
            <MobileWrapper>
                <ListItemsMobile infoCards={props.infoCards}/>
            </MobileWrapper>
        </>
    );
}