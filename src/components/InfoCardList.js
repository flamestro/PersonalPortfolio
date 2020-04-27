import React from 'react'
import InfoBoardCard from './InfoBoardCard'
import {Container} from 'react-bootstrap';

class InfoCardList extends React.Component {
    render() {
        const isDesktop = this.props.state.isDesktop;
        let toggle = true;
        const listItemsDesktop = this.props.infoCardDataList.map((infoCardData) =>
            <InfoBoardCard infoCardData={infoCardData} key={infoCardData.id} state={this.props.state}
                           invert={toggle = !toggle}/>);
        const listItemsMobile = this.props.infoCardDataList.map((infoCardData) =>
            <InfoBoardCard infoCardData={infoCardData} key={infoCardData.id} state={this.props.state} invert={false}/>);
        return (
            <Container fluid>
                {isDesktop ? (
                    <div>
                        {listItemsDesktop}
                    </div>
                ) : (
                    <div>
                        {listItemsMobile}
                    </div>
                )}
            </Container>
        );
    }
}

export default InfoCardList;
