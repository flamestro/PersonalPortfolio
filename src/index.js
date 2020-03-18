import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const infoCardDataList =
[{
  name: "Project",
  id: "0",
  description: "Hey, my Name is Ahmet Kilic and I am an full stack software developer studying Business Informatics! Welcome to my personal portfolio page. Scroll down to see my past projects.",
  infoCardPictureURL: "https://avatars0.githubusercontent.com/u/23012283?s=460&u=0976e85e757cf6588dbd076ff04a610753c648ce&v=4",
  imageALT: "This is an Picture of Ahmet Kilic"
},
{
  name: "Project",
  id: "1",
  title: "Blockcerts extension",
  description: "Blockcerts extension: I had the chance to work on an PoC extension for an opensource educational credentialing platform which is called Blockcerts. Learned a lot of stuff in Python and Blockchain Engineering.",
  infoCardPictureURL: "./blockcertsTitlePage.png",
  imageALT: "This is an Screenshot of the website blockcerts.org"
},
{
  name: "Skills",
  id: "2",
  title: "Serverless Migration",
  description: "Opensense.network migration: In this project I had the oportunity to migrate an Data Importer for opensense.network into an Serverless solution. Learned a lot of stuff about Cloud Services and Serverless Infrastructure.",
  infoCardPictureURL: "./opensenseTitlePage.png",
  imageALT: "This is an Screenshot of the website opensense.network"
}];

const menuItems = [{
  name: "GitHub",
  id: "1",
  link: "https://github.com/flamestro"
},
{
  name: "Xing",
  id: "2",
  link: "https://www.xing.com/profile/Ahmet_Kilic110"
},
{
  name: "Linked In",
  id: "3",
  link: "https://www.linkedin.com/in/ahmet-kilic-2530721a4/"
},
{
  name: "Medium",
  id: "4",
  link: "https://medium.com/@flamestro"
}];

ReactDOM.render(<App menuItems={menuItems} infoCardDataList={infoCardDataList}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
