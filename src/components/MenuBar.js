import React from 'react';
import MenuItem from './MenuItem'
import {Row, Container, Col} from 'react-bootstrap'

class Menu extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     isDesktop: false
   };
   this.updatePredicate = this.updatePredicate.bind(this);
   this.dropDownFunction = this.dropDownFunction.bind(this);
   }

  componentDidMount(){
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
      this.setState({ isDesktop: window.innerWidth > 960 });
  }

  dropDownFunction() {
      document.getElementById("dropDownID").classList.toggle("show");
  }


  render(){
    const isDesktop = this.state.isDesktop;
    const listItems = this.props.menuItems.map((menuItem) =>
    <Col key={menuItem.id}><MenuItem menuItem={menuItem} dropdown={isDesktop}/></Col>);

    return (
      <Container fluid>
        {isDesktop ? (
              <Row className="menuBar bordered">
                  {listItems}
              </Row>
        ) : (
          <div className="dropdown">
            <button onClick={this.dropDownFunction} className="menuBarDropDown">Menu</button>
              <div className="dropdown-content" id="dropDownID">
                {listItems}
              </div>
          </div>
        )}
      </Container>
  );
  }
}

export default Menu;
