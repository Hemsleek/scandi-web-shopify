import React, { Component, Fragment } from "react";
import Routes from "./Routes";

//global styles
import GlobalStyle from "./globalStyles";

//Components
import PageLayout from './components/PageLayout'
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
          <PageLayout>
            <Routes />
          </PageLayout>
        </div>
      </Fragment>
    );
  }
}

export default App;
