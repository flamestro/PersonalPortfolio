import React from 'react';
import './style/App.css';
import './style/infoBoard.css';
import './style/menuItem.css';

import MenuBar from './components/MenuBar';
import InfoBoard from './components/InfoBoard';

class App extends React.Component {
  render(){
    return (
    <div id="App">
      <MenuBar menuItems={this.props.menuItems}/>
      <InfoBoard user={this.props.user} infoCardDataList={this.props.infoCardDataList}/>
    </div>
  );
  }
}
export default App;
