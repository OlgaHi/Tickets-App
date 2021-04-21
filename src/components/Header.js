import React from "react";
import ticketImage from "./../img/ticket1.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketImage} alt="show ticket kiosk" width="400" height="300" />
    </React.Fragment>
  );
}

export default Header;