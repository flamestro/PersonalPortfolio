import React from 'react';
import './style/App.css';

import MenuBar from './components/MenuBar';
import InfoBoard from './components/InfoBoard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      displayWidth: 0
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth >= 992 });
    this.setState({ displayWidth: window.innerWidth });
  }
  render() {
    return (
      <div id="App">
        <MenuBar state={this.state} menuItems={this.props.menuItems} />
        <InfoBoard state={this.state} user={this.props.user} infoCardDataList={this.props.infoCardDataList} />
      </div>
    );
  }
}
export default App;
