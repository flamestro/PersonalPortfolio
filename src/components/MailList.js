import React from 'react';
import Mail from './Mail';

function MailList(props) {
  const listItems = props.messages.map((message) =>
  <Mail message={message} key={message.toString()}/>);
  return (
    <div>
        <ul>
          {listItems}
        </ul>
    </div>
  );
}

export default MailList;
