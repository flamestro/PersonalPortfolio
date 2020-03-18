import React from 'react';

function MenuItem(props) {

  return (
    <a className={"card menuItemID-" + props.menuItem.id} href={props.menuItem.link} target="_blank" rel="noopener noreferrer">
      {props.menuItem.name}
    </a>
  );
}

export default MenuItem;
