import React from 'react';

function format_name(user){
  return user.firstname + " " + user.lastname;
}

function GreetingText(props){
    if (props.user){
      return (
        <div className="card">
        <h4>Hello, {format_name(props.user)} you are at chapter 9 of <a href="https://reactjs.org/docs/state-and-lifecycle.html">this Tutorial</a>!</h4>
        </div>);
    }
    return (
      <div className="card">
      <h1>Hello, Stranger!</h1>
      </div>);
}

export default GreetingText;
