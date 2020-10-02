import React from 'react';
import './style/App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MenuBar} from './components/MenuBar/MenuBar';
import {InfoCardList} from './components/InfoCard/InfoCardList';
import {TicTacToe} from "./components/TicTacToe/TicTacToe";

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
import infoCardDataListData from './data/infoCardDataList.json';
import {ViewOuterContainer, ViewInnerContainer} from './components/ViewContainer/ViewContainer';

export const App = () => {
    return (
        <div id="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <ViewOuterContainer>
                            <ViewInnerContainer>
                                <MenuBar menuItems={menuItemsRawData}/>
                                <InfoCardList infoCards={infoCardDataListData}/>
                            </ViewInnerContainer>
                        </ViewOuterContainer>
                    </Route>
                    <Route path="/tictactoe">
                        <TicTacToe/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
