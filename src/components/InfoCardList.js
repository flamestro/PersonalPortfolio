import React from 'react'
import InfoBoardCard from './InfoBoardCard'

class InfoCardList extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     isDesktop: false
   };
   this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount(){
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
      this.setState({ isDesktop: window.innerWidth >= 992 });
  }

  render(){
    const isDesktop = this.state.isDesktop;
    let toggle = true;
    const listItemsDesktop = this.props.infoCardDataList.map((infoCardData) =>
    <InfoBoardCard infoCardData={infoCardData} key={infoCardData.id} isDesktop={isDesktop} invert={toggle = !toggle}/>);
    const listItemsMobile = this.props.infoCardDataList.map((infoCardData) =>
    <InfoBoardCard infoCardData={infoCardData} key={infoCardData.id} isDesktop={isDesktop} invert={false}/>);
    return (
      <div>
        {isDesktop ? (
          <div>
                {listItemsDesktop}
          </div>
        ) : (
          <div>
            {listItemsMobile}
          </div>

        )}
      </div>

  );
  }
}
export default InfoCardList;
