import React from 'react';
import MenuItem from './MenuItem'

class Menu extends React.Component {
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
      this.setState({ isDesktop: window.innerWidth > 1450 });
    }
  render(){
    const isDesktop = this.state.isDesktop;
    const listItems = this.props.menuItems.map((menuItem) =>
    <MenuItem menuItem={menuItem} dropdown={isDesktop} key={menuItem.id}/>);

    return (
      <div>
        {isDesktop ? (
          <div class="menuBar row bordered">
                {listItems}
          </div>
        ) : (
          <div class="dropdown">
          <button class="menuBarDropDown">Menu</button>
          <div class="dropdown-content">
            {listItems}
          </div>
        </div>

        )}
      </div>

  );
  }
}

export default Menu;
/*


*/
