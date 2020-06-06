import React from 'react';
import './style/App.css';

import {MenuBar} from './components/MenuBar/MenuBar';
import {InfoCardList} from "./components/InfoCard/InfoCardList";

/*
  [
    {
      "name": "GitHub",
      "id": "1",
      "link": "someUrl.com"
    }
  ]
 */
import menuItemsRawData from './data/menuItemList.json';
/*
  [
    {
      "type": "Introduction",
      "id": "0",
      "description": "Hey Lorem Ipsum",
      "infoCardPictureURL": "somePictureUrl.com",
      "imageALT": "Some alternative text for the picture"
    }
  ]
 */
import infoCardDataListData from './data/infoCardDataList.json'

export const App = () => {
    return (
        <div id="App" className={"view-container"}>
            <MenuBar menuItems={menuItemsRawData}/>
            <InfoCardList infoCards={infoCardDataListData}/>
        </div>
    );
}

export default App;
