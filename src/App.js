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
      <div className="mainContent">
        <InfoBoard user={props.user} infoCardDataList={props.infoCardDataList}/>
      </div>
    </div>
  );
}

export default App;
