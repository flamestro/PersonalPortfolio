import React from 'react'
import InfoBoardCard from './InfoBoardCard'
import styled from 'styled-components'

const InfoBoardCardDesktop = styled(InfoBoardCard) `
display: none;
max-width: 100%;
min-width: 100%;
@media (min-width: 600px) {
    display: block;
}
`

const InfoBoardCardMobile = styled(InfoBoardCard) `
display: block;

@media (min-width: 600px) {
    display: none;
}
`
export const InfoCardList = props => {
        let toggle = true;
        const listItemsDesktop = props.infoCardDataList.map((infoCardData) =>
            <InfoBoardCardDesktop infoCardData={infoCardData} key={infoCardData.id} state={props.state}
                           invert={toggle = !toggle}/>);
        const listItemsMobile = props.infoCardDataList.map((infoCardData) =>
            <InfoBoardCardMobile infoCardData={infoCardData} key={infoCardData.id} state={props.state} invert={false}/>);
        return (
            <>
                {listItemsDesktop}
            </>
        );
}