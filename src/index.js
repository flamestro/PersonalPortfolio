import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const infoCardDataList =
  [{
    type: "Introduction",
    id: "0",
    description: "Hey, my Name is Ahmet Kilic! I am a full stack software developer studying Business Informatics! My main stack is Java Spring, Spring Boot and React. I am really interested in Cloud Computing and similar topics. Welcome to my personal portfolio page (WIP). Scroll down to see some of my past projects.",
    infoCardPictureURL: "https://avatars0.githubusercontent.com/u/23012283?s=460&u=0976e85e757cf6588dbd076ff04a610753c648ce&v=4",
    imageALT: "This is an Picture of Ahmet Kilic"
  },
  {
    type: "Project",
    id: "1",
    title: "Blockcerts extension: ",
    description: "I had the chance to work on a PoC extension for an opensource educational credentialing platform which is called Blockcerts. Learned a lot about Blockchain Engineering.",
    usedTech: "Web3, Python, OpenBadges v2, Soliditiy, Ethereum Blockchain, IPFS",
    infoCardPictureURL: "./blockcertsTitlePage.png",
    imageALT: "This is an Screenshot of the website blockcerts.org"
  },
  {
    type: "Project",
    id: "2",
    title: "Opensense.network Serverless Migration: ",
    description: "In this project I had the opportunity to migrate a Data Importer for opensense.network into a Serverless solution. Learned a lot about Serverless infrastructure and Serverless principles.",
    usedTech: "IBM Cloud Functions, Apache OpenWhisk, Python, Flask, MongoDB, Serverless framework, Docker",
    infoCardPictureURL: "./opensenseTitlePage.png",
    imageALT: "This is an Screenshot of the website opensense.network"
  },
  {
    type: "Project",
    id: "3",
    title: "Full-Stack Slack Clone: ",
    description: "Here I developed an simple Slack clone including Front-End and Back-End. Learned a lot about Rest and MicroServices.",
    usedTech: "Docker, SQL, Java, Spring, Spring Boot, JavaScript, JQuerry, CSS, HTML",
    infoCardPictureURL: "./slackLikeClonePage.png",
    imageALT: "This is an Screenshot of the Full-Stack Slack Clone"
  },
  {
    type: "Project",
    id: "4",
    title: "Portfolio Page: ",
    description: "This project is basically what you see on this webpage. It is a overview of some of my projects and relevant links. Learned a lot about React and Responsive Design.",
    usedTech: "React, CSS",
    infoCardPictureURL: "./portfolioPage.png",
    imageALT: "This is an Screenshot of this portfolio website from Ahmet Kilic"
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

ReactDOM.render(
  <App menuItems={menuItems} infoCardDataList={infoCardDataList} />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
