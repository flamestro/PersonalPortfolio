import React from 'react';

function MenuItem(props) {

  return (
      <a className={"col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 card menuItemID-" + props.menuItem.id} href={props.menuItem.link} target="_blank" rel="noopener noreferrer">
        {props.menuItem.name}
      </a>
  );
}

export default MenuItem;
