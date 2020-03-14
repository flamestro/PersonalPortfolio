
import React from 'react';
import MailList from './MailList'

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div className="card">
      {unreadMessages.length > 0 ?
        <div>
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
        <MailList messages={unreadMessages}/>
        </div>
        :
        null
      }
    </div>
  );
}


export default Mailbox;
