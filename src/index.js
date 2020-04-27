import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

const infoCardDataList = infoCardDataListData;

const menuItems = menuItemsRawData

ReactDOM.render(
    <App menuItems={menuItems} infoCardDataList={infoCardDataList}/>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
