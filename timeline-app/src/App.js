import React, { Component } from "react";
import Auxillary from "../src/HOC/Auxillary/Auxillary";
import Layout from "../src/HOC/Layout/Layout";
import TL from './Containers/TL/TL'

//First Route of the Application, We call Layout passing Core Component TL

class app extends Component {
  render() {
    return (
      <Auxillary>
        <Layout>
          <TL />
        </Layout>
      </Auxillary>
    );
  }
}

export default app;
