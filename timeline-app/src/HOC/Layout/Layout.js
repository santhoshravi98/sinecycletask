import React, { Component } from "react";
import Aux from "../Auxillary/Auxillary";
import cssClasses from "./Layout.module.css";
//Check Comment
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  render() {
    return (
      <Aux>
        <main className={cssClasses.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}


export default Layout;
