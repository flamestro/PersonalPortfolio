import React from 'react';
import MenuItem from './MenuItem'
import {Row, Container, Col} from 'react-bootstrap'
import styled from 'styled-components'

const MenuBarNoDropDown = styled(Row)`
overflow: hidden;
/*MenuBarColor-Color*/
background-color: #FCA502;
top: 0;
width: 100%;
margin: 0 !important;
border: 2px solid black;
`

const MenuBarDropDown = styled.div`
border: 2px solid black;
width: 100%;
position: relative;
display: inline-block;
`

const DropDownButton = styled.button`
/*ButtonColor-Color*/
background-color: #FCA502;
color: white;
font-family: 'Roboto', sans-serif;
padding: 16px;
font-size: 2rem;
border: none;
width: 100%;
cursor: pointer;
`

const DropDownContext = styled.div`
display: none;
position: absolute;
background-color: #f1f1f1;
width: 100%;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
`

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.dropDownFunction = this.dropDownFunction.bind(this);
    }

    dropDownFunction() {
        document.getElementById("dropDownID").classList.toggle("show");
    }

    render() {
        const isDesktop = this.props.state.isDesktop;
        const listItems = this.props.menuItems.map((menuItem) =>
            <Col key={menuItem.id}><MenuItem menuItem={menuItem} dropdown={isDesktop}/></Col>);

        return (
            <Container fluid>
                {isDesktop ? (
                    <MenuBarNoDropDown>
                        {listItems}
                    </MenuBarNoDropDown>
                ) : (
                    <MenuBarDropDown>
                        <DropDownButton onClick={this.dropDownFunction}>Menu</DropDownButton>
                        <DropDownContext id="dropDownID">
                            {listItems}
                        </DropDownContext>
                    </MenuBarDropDown>
                )}
            </Container>
        );
    }
}

export default Menu;
