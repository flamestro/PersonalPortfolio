import React from 'react';

function MenuItem(props) {
  const dropdown = props.dropdown
  if (dropdown){
    return (
      <div className={"col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 card menuItemID-" + props.menuItem.id}>
      {props.menuItem.name}
    </div>
  );
  }
  return (
      <div className={"col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 card menuItemID-" + props.menuItem.id}>
        {props.menuItem.name}
      </div>
  );
}

export default MenuItem;
