import React, { Component } from "react";
import Aux from "../Auxillary/Auxillary";

//A Layout Structure which can also allow Header and Footer to be added

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  render() {
    return (
      <Aux>
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
