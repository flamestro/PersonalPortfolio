import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const infoCardDataList =
[{
  name: "Project",
  id: "0",
  description: "Hey, my Name is Ahmet and I am an full stack software developer studying Business Informatics! Welcome to my personal portfolio page. Scroll down to see my past projects.",
  infoCardPictureURL: "https://avatars0.githubusercontent.com/u/23012283?s=460&u=0976e85e757cf6588dbd076ff04a610753c648ce&v=4"
},
{
  name: "Project",
  id: "1",
  title: "Blockcerts extension",
  description: "Blockcerts extension: I had the chance to work on an PoC extension for an opensource educational credentialing platform which is called Blockcerts. Learned a lot of stuff in Python and Blockchain Engineering.",
  infoCardPictureURL: "./blockcertsTitlePage.png"
},
{
  name: "Skills",
  id: "2",
  title: "Serverless Migration",
  description: "Opensense.network migration: In this project I had the oportunity to migrate an Data Importer for opensense.network into an Serverless solution. Learned a lot of stuff about Cloud Services and Serverless Infrastructure.",
  infoCardPictureURL: "./opensenseTitlePage.png"
}];

const menuItems = [{
  name: "Projects",
  id: "1",
  link: ""
},
{
  name: "Skills",
  id: "2",
  link: ""
},
{
  name: "About Me",
  id: "3",
  link: ""
},
{
  name: "Contact",
  id: "4",
  link: ""
}];

const messages = ['Hallo', 'Re: Hallo', 'Re:Re: Hallo'];
ReactDOM.render(<App messages={messages} menuItems={menuItems} infoCardDataList={infoCardDataList}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
