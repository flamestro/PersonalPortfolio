import React from 'react';
import './style/App.css';
import './style/infoBoard.css';
import './style/menuItem.css';

import MenuBar from './components/MenuBar';
import InfoBoard from './components/InfoBoard';


function App(props) {

  return (
    <div id="App">
      <MenuBar menuItems={props.menuItems}/>
      <InfoBoard user={props.user} infoCardDataList={props.infoCardDataList}/>
    </div>
  );
}

export default App;
