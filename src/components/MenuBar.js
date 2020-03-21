import React from 'react';
import MenuItem from './MenuItem'
import {Row, Container, Col} from 'react-bootstrap'

class Menu extends React.Component {
  render(){
    const isDesktop = this.props.state.isDesktop;
    const listItems = this.props.menuItems.map((menuItem) =>
    <Col key={menuItem.id}><MenuItem menuItem={menuItem} dropdown={isDesktop}/></Col>);

    return (
      <Container fluid>
        {isDesktop ? (
              <Row className="menuBar bordered">
                  {listItems}
              </Row>
        ) : (
          <div className="dropdown bordered">
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
