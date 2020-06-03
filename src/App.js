import React from 'react';
import './style/App.css';

import {MenuBar} from './components/MenuBar/MenuBar';
import {InfoCardList} from "./components/InfoCard/InfoCardList";

class App extends React.Component {
    render() {
        return (
            <div id="App" className={"view-container"}>
                <MenuBar state={this.state} menuItems={this.props.menuItems}/>
                <InfoCardList state={this.state} infoCardDataList={this.props.infoCardDataList}/>
            </div>
        );
    }
}

export default App;
