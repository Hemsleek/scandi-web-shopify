import React, { Component, Fragment } from "react";
import Routes from "./Routes";

//global styles
import GlobalStyle from "./globalStyles";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <div className="App">
          <Routes />
        </div>
      </Fragment>
    );
  }
}

export default App;
